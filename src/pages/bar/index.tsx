import BarChart from '@/components/charts/BarChart';
import Header from '@/components/Header';
import { Box } from '@mui/material';

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Bar Chart  Instance" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
