import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderColor: '#E2E8F0',
    _checked: {
      bgColor: 'brand.primary',
      borderColor: 'brand.primary',
    },
    _disabled: {
      bgColor: 'transparent',
      borderColor: '#E2E8F0',
      _checked: {
        color: 'white',
        bgColor: 'brand.primary',
        borderColor: 'brand.primary',
      },
    },
  },
  label: {
    _disabled: { opacity: 1 },
  },
});

export const Radio = defineMultiStyleConfig({ baseStyle });
