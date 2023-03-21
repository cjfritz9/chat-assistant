import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const containerBase = defineStyle({
  display: 'flex',
  flexDir: 'row',
  minW: '100dvw',
  m: '0',
  p: '0'
});

const linkBase = defineStyle({
  textAlign: 'center',
  fontSize: ['14px', '16px'],
  color: 'Brand.AppleGreen.Reg',
  textTransform: 'uppercase',
  fontFamily: 'Montserrat, sans-serif'
});

const newChat = defineStyle({
  textAlign: 'center',
  fontSize: ['14px', '16px'],
  color: 'white',
  textTransform: 'none',
  fontFamily: 'Montserrat, sans-serif'
})

export const mainContainer = defineStyleConfig({
  baseStyle: containerBase
});

export const mainLink = defineStyleConfig({
  baseStyle: linkBase,
  variants: { newChat }
});
