import React from 'react'
import { Container }  from '@chakra-ui/react'
import Login from '../auth/Login';

const LoginRegister: React.FC = () => {
  return (
    <Container w='100dvw' h='100dvh'>
      <Login />
    </Container>
  );
}

export default LoginRegister;