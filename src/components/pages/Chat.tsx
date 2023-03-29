import React, { useContext, useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import SideBar from '../chat/SideBar';
import ChatWindow from '../chat/ChatWindow';
import { useNavigate } from 'react-router-dom';
import { SiteContext } from '../../context/SiteContext';
import { ChatState } from '../../models/types';

const Chat: React.FC = () => {
  const [windowState, setWindowState] = useState<ChatState>('start chat');
  const { isLoggedIn } = useContext<any>(SiteContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <Flex>
      <SideBar setWindowState={setWindowState} />
      <ChatWindow setWindowState={setWindowState} windowState={windowState} />
    </Flex>
  );
};

export default Chat;
