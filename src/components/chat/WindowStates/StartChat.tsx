import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react';

const StartChat: React.FC = () => {
  return (
    <Stack w='640px' h='100%' align='center'>
      <Heading textAlign='left' variant='chatHeading'>New Chat</Heading>
      <Stack pt='2rem' align='center' gap='2rem'>
        <Flex w='100%' align='center' justify='space-between' gap='1.5rem'>
          <Text whiteSpace='nowrap' variant='newChatLabel'>
            Assistant's Role:
          </Text>
          <Input
            h='2.25rem'
            w='480px'
            placeholder="ex. 'You are a virtual assitant that speaks like a pirate'"
          />
        </Flex>
        <Flex w='100%' align='flex-start' justify='space-between' gap='1.5rem'>
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
        </Flex>
        <Flex w='100%' justify='flex-end'>
          <Button>Send</Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default StartChat;
