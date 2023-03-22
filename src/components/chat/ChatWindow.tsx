import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { ChatState } from '../../models/types';
import StartChat from './WindowStates/StartChat';
import Conversation from './WindowStates/Conversation';

const ChatWindow: React.FC = () => {
  const [windowState, setWindowState] = useState<ChatState>('start chat');

  return (
    <Stack
      flexGrow='1'
      p='4rem'
      align='center'
    >
      {windowState === 'start chat' ? (
        <StartChat />
      ) : windowState === 'conversation' ? (
        <Conversation />
      ) : null}
    </Stack>
  );
};

export default ChatWindow;
