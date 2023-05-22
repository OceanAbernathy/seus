import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../chakra/theme';
import SeusRouter from './Router';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <SeusRouter />
    </ChakraProvider>
  );
}
