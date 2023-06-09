import { defineStyleConfig } from '@chakra-ui/react';

function getBackgroundColor(type) {
  if (type === 'Easy') {
    return 'yellow.200';
  }
  if (type === 'Intermediate') {
    return 'orange.300';
  }
  return 'red.300';
}

export const Tag = defineStyleConfig({
  baseStyle: {
    container: {
      fontSize: '11px',
      bgColor: { getBackgroundColor },
      color: 'black',
    },
  },

  variants: {
    solid1: {
      container: {
        fontSize: '11px',
      },
    },
  },
  defaultProps: {
    variant: 'solid1',
  },
});
