import Header from '@/components/Header';
import LineChart from '@/components/charts/LineChart';
import { Box } from '@mui/material';

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Line Chart Instance" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
