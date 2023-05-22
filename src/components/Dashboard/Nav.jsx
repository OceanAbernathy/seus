import { Flex, IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Context';
import HamburgerMenu from './HamburgerMenu';
import { NavData } from './NavData';

export default function Nav() {
  const { setItems } = useContext(Context);

  return (
    <Flex
      position='absolute'
      width='100%'
      justifyContent='space-evenly'
      pb={7}
      bgColor='brand.secondaryLight'
    >
      {NavData.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end
          onClick={() => setItems(item)}
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
      <HamburgerMenu />
    </Flex>
  );
}
