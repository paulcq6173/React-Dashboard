import Header from '@/components/Header';
import {
  createEventId,
  INITIAL_EVENTS,
} from '@/pages/calendar/fullCalendarUtils';
import { colorTokens } from '@/theme';
import {
  CalendarApi,
  DateSelectArg,
  EventApi,
  EventClickArg,
  formatDate,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

const Calendar = () => {
  const theme: Theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<Array<EventApi>>([]);

  const handleDateClick = (selectInfo: DateSelectArg) => {
    const title: string | null = prompt('Create a new title for your event');
    const calendarApi: CalendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start!, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={INITIAL_EVENTS}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
