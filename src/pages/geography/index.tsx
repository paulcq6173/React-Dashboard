import GeographyChart from '@/components/charts/GeographyChart';
import Header from '@/components/Header';
import { colorTokens } from '@/theme';
import { Box, useTheme } from '@mui/material';

const Geography = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Geography Chart Instance" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
