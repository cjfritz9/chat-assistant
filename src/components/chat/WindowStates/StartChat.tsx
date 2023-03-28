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
import { createChatRequest } from '../../../api';

const StartChat: React.FC = () => {
  const [prompt, setPrompt] = useState({ role: '', request: '' });

  const { setCurrentRequest, setCurrentResponse, currentPrompt, currentResponse } = useContext<any>(SiteContext);

  const handleSubmit = async () => {
    setCurrentRequest(prompt.role, prompt.request);
    const response = await createChatRequest([
      { role: 'user', content: prompt.role },
      { role: 'user', content: prompt.request }
    ]);
    if (!response.data) return;
    if (response.data.error) {
      console.log(response.error);
    }
    if (response.data.success) {
      console.log('res', response)
      setCurrentResponse(response.data.success);
    }   
  };

  return (
    <Stack w='640px' h='100%' align='center'>
      <Heading textAlign='left' variant='chatHeading'>
        New Request
      </Heading>
      <Stack pt='2rem' align='center' gap='2rem'>
        <Stack w='100%' align='flex-start' justify='space-between' gap='.5rem'>
          <Text whiteSpace='nowrap' variant='newChatLabel'>
            Assistant's Role:
          </Text>
          <Input
            h='2.25rem'
            w='480px'
            placeholder="ex. 'You are a virtual assitant that speaks like a pirate'"
            onChange={(e) =>
              setPrompt((prev) => ({ ...prev, role: e.target.value }))
            }
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
            placeholder="ex. 'Explain quantum computing in simple terms'"
            onChange={(e) =>
              setPrompt((prev) => ({ ...prev, request: e.target.value }))
            }
          />
        </Stack>
        <Flex w='100%' justify='center'>
          <Button w='10rem' onClick={handleSubmit}>
            Send
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default StartChat;
