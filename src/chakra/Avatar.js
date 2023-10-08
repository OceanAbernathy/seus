import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const profilePill = defineStyle({
  bgColor: 'brand.lightGray',
  color: 'brand.primary',
  width: '70px',
  height: '48px',
  fontSize: '2xl',
});
const profile = defineStyle({
  bgColor: 'brand.lightGray',
  color: 'brand.primary',
  width: '80px',
  height: '80px',
  fontSize: '3xl',
});

const sizes = {
  profilePill: definePartsStyle({ container: profilePill }),
  profile: definePartsStyle({ container: profile }),
};

export const Avatar = defineMultiStyleConfig({ sizes });
