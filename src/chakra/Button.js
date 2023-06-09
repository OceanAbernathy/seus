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
      bgColor: 'brand.lightGray',
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
      bgColor: 'brand.secondary',
      fontSize: '2xl',
    },
    nav: {
      height: '80px',
      borderTopRadius: '0',
      fontSize: '3xl',
      color: 'white',
      py: '25px',
      px: '10px',
    },
    activeNav: {
      height: '80px',
      borderTopRadius: '0',
      fontSize: '3xl',
      py: '25px',
      px: '10px',
      bgColor: 'brand.secondary',
    },
    profileEdit: {
      color: 'brand.darkGray',
      bgColor: 'brand.lightGray',
      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25))',
    },
    add: {
      width: 'fit-content',
      minWidth: 'fit-content',
      height: 'fit-content',
      fontSize: 'xl',
      fontWeight: 'normal',
      filter: 'none',
      pl: '1',
      pr: '2',
      pt: '1',
      pb: '2',
    },
  },
  defaultProps: {
    variant: 'solid1',
  },
});
