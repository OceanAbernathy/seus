import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bgColor: 'brand.lightGray',
    rounded: 'full',
    width: '100%',
    justifyContent: 'center',
  },
  label: {
    color: 'black',
    fontWeight: 'normal',
    padding: '12px',
  },
});

const unSelected = definePartsStyle({
  control: {
    display: 'none',
  },
  container: {
    bgColor: 'brand.lightGray',
  },
  label: defineStyle({
    color: 'black',
  }),
});

const selected = definePartsStyle({
  control: {
    display: 'none',
  },
  container: {
    bgColor: 'brand.primary',
  },
  label: defineStyle({
    color: 'white',
  }),
});

const profile = definePartsStyle({
  control: {
    display: 'block',
    _checked: { bgColor: 'brand.primary', borderColor: 'brand.primary' },
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
  icon: {
    bgColor: 'brand.primary',
  },
  container: {
    bgColor: 'none',
    width: 'fit-content',
  },
  label: {
    color: 'brand.darkGray',
    fontWeight: 'normal',
    padding: '0',
    _checked: {
      _disabled: { opacity: '1' },
    },
  },
});

export const Checkbox = defineMultiStyleConfig({
  baseStyle,
  unSelected,
  selected,
  variants: { unSelected, selected, profile },
});
