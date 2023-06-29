import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  variants: {
    text: {
      field: {
        borderRadius: 'full',
        textColor: 'brand.darkGray',
        fontSize: '1.25rem',
        pl: '30px',
        h: '60px',
        filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25))',
        _placeholder: {
          fontSize: '1.25rem',
          textColor: 'brand.mediumGray',
          opacity: 1,
        },
        _focusVisible: { outline: 'none' },
      },
    },
    text2: {
      field: {
        textColor: 'brand.darkGray',
        pl: 2,
        height: '30px',
        bgColor: 'rgba(255, 255, 255, .4)',
        _placeholder: {
          textColor: 'brand.darkGray',
          opacity: 1,
        },
        _focusVisible: { outline: 'none' },
        _disabled: {
          opacity: 1,
        },
      },
    },
    text3: {
      field: {
        textColor: 'brand.darkGray',
        pl: 2,
        height: '30px',
        bgColor: 'rgba(255, 255, 255, .4)',
        _placeholder: {
          textColor: 'brand.mediumGray',
          opacity: 1,
        },
        _focusVisible: { outline: 'none' },
      },
    },
  },
  defaultProps: {
    variant: 'text',
  },
});
