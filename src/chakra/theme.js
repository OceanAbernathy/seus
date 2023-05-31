// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

import { Button } from './Button';
import { Input } from './Input';
import { Checkbox } from './Checkbox';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      primary: '#8656CD',
      primaryLight: '#B199D5',
      primaryLightMuted: '#E3D1FF',
      primaryDark: '#644099',
      primaryGrayscale: '#F2EBFF',
      secondary: '#00C996',
      secondaryLight: '#3FD2AE',
      secondaryLightMuted: '#82D9C3',
      secondaryDark: '#009671',
      secondaryGrayscale: '#E6FFF9',
      lightGray: '#D9D9D9',
      darkGray: '#454545',
    },
  },
  fonts: {
    body: 'Figtree, sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  shadows: {
    outline: 'none',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'gray.200',
        color: '#454545',
      },
    }),
  },
  components: {
    Button,
    Input,
    Checkbox: Checkbox,
  },
});
