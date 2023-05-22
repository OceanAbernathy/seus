import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25))',
    fontWeight: 'normal',
    letterSpacing: 'wider',
    width: '100%',
    p: '30',
  },

  variants: {
    solid1: {
      bgColor: 'brand.primary',
      color: 'white',
      fontSize: '2xl',
    },
    solid2: {
      bgColor: 'brand.secondary',
      color: 'white',
      fontSize: '2xl',
      fontWeight: 'semibold',
    },
    solid3: {
      bgColor: 'brand.lightGrey',
      color: 'black',
      fontSize: '2xl',
      fontWeight: 'semibold',
    },
    ghost: {
      width: 'fit-content',
      fontSize: '4xl',
      fontWeight: 'normal',
    },
    close: {
      width: '60px',
      height: '60px',
      color: 'white',
      fontSize: '3xl',
      bgColor: 'brand.primary',
    },
    hamburger: {
      bgColor: 'brand.lightGrey',
      fontSize: '2xl',
    },
    nav: {
      color: 'white',
      fontSize: '3xl',
      px: '0',
    },
    activeNav: {
      color: 'white',
      fontSize: '3xl',
      px: '0',
      bgColor: 'red',
    },
  },
  defaultProps: {
    variant: 'solid1',
  },
});
