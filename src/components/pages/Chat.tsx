import React from 'react'
import { Container }  from '@chakra-ui/react'
import SideBar from '../chat/SideBar';

const Chat: React.FC = () => {
  return (
    <Container>
      <SideBar />
    </Container>
  );
}

export default Chat;