import React from 'react'
import { Flex }  from '@chakra-ui/react'
import SideBar from '../chat/SideBar';
import ChatWindow from '../chat/ChatWindow';

const Chat: React.FC = () => {
  return (
    <Flex  w='100%'>
      <SideBar />
      <ChatWindow />
    </Flex>
  );
}

export default Chat;