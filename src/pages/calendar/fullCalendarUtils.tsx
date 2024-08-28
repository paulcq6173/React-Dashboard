import { EventInput } from '@fullcalendar/core';

// Refers https://github.com/fullcalendar/fullcalendar-examples/blob/main/react-typescript
let eventGuid: number = 3;
// YYYY-MM-DD of today
//const todayStr: string = new Date().toISOString().replace(/T.*$/, '');

export const INITIAL_EVENTS: Array<EventInput> = [
  {
    id: '1',
    title: 'All-day event',
    start: '2024-09-14',
  },
  {
    id: '2',
    title: 'Timed event',
    start: '2024-09-28',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
