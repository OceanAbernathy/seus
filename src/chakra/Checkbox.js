import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    display: 'none',
  },
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
  container: {
    bgColor: 'brand.lightGray',
  },
  label: defineStyle({
    color: 'black',
  }),
});

const selected = definePartsStyle({
  container: {
    bgColor: 'brand.primary',
  },
  label: defineStyle({
    color: 'white',
  }),
});

export const Checkbox = defineMultiStyleConfig({
  baseStyle,
  unSelected,
  selected,
  variants: { unSelected, selected },
});