import React from 'react';
import {
  Container,
  Divider,
  Flex,
  Stack,
  Link,
  Icon,
  Text
} from '@chakra-ui/react';
import { TbCoins, TbQuestionCircle, TbBrandHipchat } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Stack
        bgColor='Brand.Agate.Reg'
        h='100dvh'
        w='240px'
        justify='space-between'
        align='center'
        py='2rem'
        boxShadow='2px 0 2px #22577A'
      >
        <Stack align='center' w='80%'>
          <Flex
            as={Link}
            variant='newChat'
            justify='flex-start'
            w='100%'
            align='center'
          >
            <Icon mr='1rem' color='white' as={TbBrandHipchat} />
            <Text>New Chat</Text>
          </Flex>
        </Stack>
        <Stack align='center' w='100%'>
          <Divider mb='1.5rem' w='90%' />
          <Stack w='80%'>
            <Flex as={Link} justify='flex-start' w='100%' align='center'>
              <Icon mr='1rem' color='Brand.AppleGreen.Reg' as={TbCoins} />
              <Text>tokens: {10}</Text>
            </Flex>
            <Flex as={Link} justify='flex-start' w='100%' align='center'>
              <Icon mr='1rem' color='Brand.AppleGreen.Reg' as={CgProfile} />
              <Text>account </Text>
            </Flex>
            <Flex as={Link} justify='flex-start' w='100%' align='center'>
              <Icon
                mr='1rem'
                color='Brand.AppleGreen.Reg'
                as={TbQuestionCircle}
                fontSize='18px'
              />
              <Text>about</Text>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SideBar;
