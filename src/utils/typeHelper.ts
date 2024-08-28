import { Theme } from '@mui/material/styles';

export type ToggleThemeType = {
  toggleColorMode: () => void;
};

export const isColorMode = (
  param: Theme | ToggleThemeType
): param is ToggleThemeType => {
  if ('toggleColorMode' in param) {
    return true;
  }

  throw new Error('Type of colorMode incorrect.');
};
