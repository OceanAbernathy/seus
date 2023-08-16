import { Flex, Spinner as SpinComponent } from '@chakra-ui/react';

export default function Spinner() {
  return (
    <Flex h='100vh' justifyContent='center' alignItems='center'>
      <SpinComponent
        size='xl'
        thickness='3px'
        color='gray.300'
        emptyColor='brand.primary'
      />
    </Flex>
  );
}
