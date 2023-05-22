import { Flex, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavData } from './NavData';

export default function Nav() {
  const [active, setActive] = useState('');

  return (
    <Flex
      position='absolute'
      width='100%'
      justifyContent='space-evenly'
      pt={6}
      pb={10}
      bgColor='brand.secondaryLight'
    >
      {NavData.map((item) => (
        <Link key={item.id} to={item.path} onClick={() => setActive(item)}>
          <IconButton
            icon={item.icon}
            variant={active === item ? 'activeNav' : 'nav'}
          />
        </Link>
      ))}
    </Flex>
  );
}
