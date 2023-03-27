import React, { useContext, useState } from 'react';
import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

const StartChat: React.FC = () => {
  const [request, setRequest] = useState({ role: '', request: '' })

  const {  } = useContext<any>(SiteContext);
  
  const handleSubmit = () => {

  }

  return (
    <Stack w='640px' h='100%' align='center'>
      <Heading textAlign='left' variant='chatHeading'>New Request</Heading>
      <Stack pt='2rem' align='center' gap='2rem'>
        <Stack w='100%' align='flex-start' justify='space-between' gap='.5rem'>
          <Text whiteSpace='nowrap' variant='newChatLabel'>
            Assistant's Role:
          </Text>
          <Input
            h='2.25rem'
            w='480px'
            placeholder="ex. 'You are a virtual assitant that speaks like a pirate'"
          />
        </Stack>
        <Stack w='100%' align='flex-start' justify='space-between' gap='.5rem'>
          <Text whiteSpace='nowrap' variant='newChatLabel'>
            Request:
          </Text>
          <Textarea
            _focus={{
              border: '1px solid #57CC99 !important',
              transition: 'border-color .2s ease-in-out'
            }}
            _placeholder={{
              color: '#FFFFFF75'
            }}
            fontFamily='Inter, sans-serif'
            color='#FFFFFF'
            h='7.25rem'
            w='480px'
            placeholder="ex. 'Explain quantum computing in simple terms"
          />
        </Stack>
        <Flex w='100%' justify='center'>
          <Button w='10rem'>Send</Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default StartChat;
