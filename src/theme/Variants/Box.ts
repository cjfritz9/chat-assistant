import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sentMessage = defineStyle({
  w: '100%',
  mt: ['1rem', '2rem', '3rem'],
  pb: '6rem',
  bgColor: 'green',
  color: 'white',
  fontSize: ['3rem', '3.5rem', '3.75rem'],
  fontFamily: 'Poppins',
  textAlign: ['center', 'center', 'left'],
  textShadow: '0 0 10px #FFFFFF25'
});

const replyMessage = defineStyle({
  w: '100%',
  mt: ['1rem', '2rem', '3rem'],
  pb: '6rem',
  bgColor: 'blue',
  color: 'white',
  fontSize: ['3rem', '3.5rem', '3.75rem'],
  fontFamily: 'Poppins',
  textAlign: ['center', 'center', 'left'],
  textShadow: '0 0 10px #FFFFFF25'
});

export const messageVariants = defineStyleConfig({
  variants: { sentMessage, replyMessage }
});
