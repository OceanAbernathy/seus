import { Flex, IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Helper/Context';
import HamburgerMenu from './HamburgerMenu';
import { NavData } from './NavData';
import AvatarMenu from './AvatarMenu';

export default function Nav() {
  const { setNavItems } = useContext(Context);

  return (
    <Flex
      position='absolute'
      width='100%'
      justifyContent='space-evenly'
      pb={7}
      bgColor='brand.darkGray'
    >
      {NavData.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end
          onClick={() => setNavItems(item)}
        >
          {({ isActive }) => (
            <IconButton
              aria-label={item.label}
              icon={item.icon}
              variant={isActive ? 'activeNav' : 'nav'}
            />
          )}
        </NavLink>
      ))}
      <AvatarMenu />
      <HamburgerMenu />
    </Flex>
  );
}
