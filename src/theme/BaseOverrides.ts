import { defineStyleConfig } from '@chakra-ui/react';

const containerBase = {
  display: 'flex',
  flexDir: 'column',
  minW: '100dvw',
  m: '0',
  pt: ['1rem', '3rem'],
  px: ['1rem', '2rem', '3rem', '4rem', '6rem', '8rem'],
  pb: '5rem'
};

export const mainContainer = defineStyleConfig({
  variants: { containerBase }
});
