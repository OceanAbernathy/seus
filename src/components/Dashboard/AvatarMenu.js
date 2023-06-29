import {
  Avatar,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import { SignOut, X } from '@phosphor-icons/react';

export default function AvatarMenu() {
  return (
    <Flex position='fixed' top={9} left={6} align='center'>
      <Menu position='absolute'>
        {({ isOpen }) => (
          <>
            <MenuButton>
              {isOpen ? (
                <IconButton
                  as={X}
                  width='70px'
                  height='48px'
                  p={2}
                  bgColor='brand.lightGray'
                  color='brand.darkGray'
                  cursor='pointer'
                />
              ) : (
                <Avatar name='Ocean Abernathy' size='profile' />
              )}
            </MenuButton>
            <MenuList>
              <MenuItem fontWeight='medium'>
                <Icon as={SignOut} weight='bold' mr={2} />
                Logout
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
}
