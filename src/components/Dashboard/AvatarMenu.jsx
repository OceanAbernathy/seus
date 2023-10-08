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
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';
import { useContext } from 'react';
import { Context } from '../../Helper/Context';

export default function AvatarMenu() {
  const { user } = useContext(Context);

  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    user && (
      <Flex position='fixed' top={4} left={6} align='center'>
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
                  <Avatar
                    name={user.personalInfo.displayName}
                    size='profilePill'
                  />
                )}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={logout} fontWeight='medium'>
                  <Icon as={SignOut} weight='bold' mr={2} />
                  Logout
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    )
  );
}
