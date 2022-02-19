// Global components
import React from 'react';

// Chakra components
import { Container } from '@chakra-ui/react';

// Custom components
import Head from './Head';

export default function Base({ children }) {
  return (
    <React.Fragment>
      <Head />
      <Container maxW='container.xl'>
        {children}
      </Container>
    </React.Fragment>
  )
}
