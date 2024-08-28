import Header from '@/components/Header';
import PieChart from '@/components/charts/PieChart';
import { Box } from '@mui/material';

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Pie Chart Instance" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
