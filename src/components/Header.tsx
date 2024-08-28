import { colorTokens } from '@/theme';
import { Box, Theme, Typography, useTheme } from '@mui/material';

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const theme: Theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
      <Typography variant="h4" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
