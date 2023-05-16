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
      bgColor: 'brand.100',
      color: 'white',
      fontSize: '2xl',
    },
    solid2: {
      bgColor: 'brand.200',
      color: 'white',
      fontSize: '2xl',
      fontWeight: 'semibold',
    },
    solid3: {
      bgColor: 'brand.400',
      color: 'black',
      fontSize: '2xl',
      fontWeight: 'semibold',
    },
  },
  defaultProps: {
    variant: 'solid1',
  },
});
