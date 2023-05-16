import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from '../chakra/theme';
import { ChakraProvider } from '@chakra-ui/react';
import SeusRouter from './Router';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <SeusRouter />
      </Router>
    </ChakraProvider>
  );
}
