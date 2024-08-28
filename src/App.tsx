import SideBar from '@/components/global/SideBar';
import TopNavBar from '@/components/global/TopNavBar';
import Bar from '@/pages/bar';
import Calendar from '@/pages/calendar';
import Contacts from '@/pages/contact';
import DashBoard from '@/pages/dashboard';
import FaQs from '@/pages/faq';
import Form from '@/pages/form';
import Geography from '@/pages/geography';
import Invoices from '@/pages/invoice';
import Line from '@/pages/line';
import Pie from '@/pages/pie';
import Team from '@/pages/team';
import { ColorModeContext, useMode } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopNavBar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/form" element={<Form />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/bar_chart" element={<Bar />} />
              <Route path="/pie_chart" element={<Pie />} />
              <Route path="/line_chart" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/faq" element={<FaQs />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
