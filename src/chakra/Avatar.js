import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const profile = defineStyle({
  bgColor: 'brand.lightGray',
  color: 'brand.primary',
  width: '70px',
  height: '48px',
  fontSize: '2xl',
});

const sizes = {
  profile: definePartsStyle({ container: profile }),
};

export const Avatar = defineMultiStyleConfig({ sizes });
