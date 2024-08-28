import ProgressCircle from '@/components/ProgressCircle';
import { colorTokens } from '@/theme';
import {
  Box,
  SvgIconTypeMap,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { ReactElement } from 'react';

interface IStatBoxProps {
  title: string;
  subtitle: string;
  icon: ReactElement<SvgIconTypeMap<'svg'>>;
  progress: number;
  increase: string;
}

const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: IStatBoxProps) => {
  const theme: Theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
