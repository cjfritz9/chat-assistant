import React, { useContext, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import SideBar from '../chat/SideBar';
import ChatWindow from '../chat/ChatWindow';
import { useNavigate } from 'react-router-dom';
import { SiteContext } from '../../context/SiteContext';

const Chat: React.FC = () => {
  const { isLoggedIn } = useContext<any>(SiteContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);
  return (
    <Flex w='100%'>
      <SideBar />
      <ChatWindow />
    </Flex>
  );
};

export default Chat;
