import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  variants: {
    text: {
      field: {
        borderRadius: 'full',
        textColor: '#454545',
        fontSize: '1.25rem',
        pl: '30px',
        h: '60px',
        filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25))',
        _placeholder: {
          fontSize: '1.25rem',
          textColor: '#8A8A8A',
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
