import React, { useContext, useEffect, useState } from 'react';
import {
  Container,
  Divider,
  Flex,
  Stack,
  Link,
  Icon,
  Text
} from '@chakra-ui/react';
import {
  TbCoins,
  TbQuestionCircle,
  TbBrandHipchat,
  TbBrandWechat
} from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { SiteContext } from '../../context/SiteContext';
import { useNavigate } from 'react-router-dom';
import { refreshTokensByUserId } from '../../api';

const SideBar: React.FC = () => {
  const { userInfo } = useContext<any>(SiteContext);
  const [tokenError, setTokenError] = useState('');

  const attemptTokenRefresh = async () => {
    const response = await refreshTokensByUserId(userInfo.id);
    if (response.error) {
      setTokenError('Try Again Tomorrow');
      setTimeout(() => {
        setTokenError('');
      }, 2500);
    }
    console.log(response);
  };

  return (
    <Stack
      bgColor='Brand.Agate.Reg'
      h='100dvh'
      minW='320px'
      justify='space-between'
      align='left'
      py='2rem'
      boxShadow='2px 0 2px #22577A'
    >
      <Stack align='center' w='100%'>
        <Flex
          _hover={{ bgColor: 'Brand.Agate.99' }}
          px='1rem'
          py='.5rem'
          borderRadius='2px'
          as={Link}
          variant='newChat'
          justify='flex-start'
          w='90%'
          align='center'
        >
          <Icon mr='1rem' color='white' as={TbBrandHipchat} />
          <Text>New Request</Text>
        </Flex>
        <Divider mb='1.5rem' w='90%' />
        <Text variant='sidebarText'>History</Text>
        <Flex
          _hover={{ bgColor: 'Brand.Agate.99' }}
          px='1rem'
          py='.5rem'
          borderRadius='2px'
          as={Link}
          variant='chatHistory'
          justify='flex-start'
          w='90%'
          align='center'
        >
          <Icon mr='1rem' color='white' as={TbBrandWechat} />
          <Text fontStyle='italic'>Coming soon...</Text>
        </Flex>
      </Stack>
      <Stack align='center' w='100%'>
        <Divider mb='1.5rem' w='90%' />
        <Stack w='90%'>
          <Flex
            as={Link}
            _hover={{ bgColor: 'Brand.Agate.99' }}
            px='1rem'
            py='.5rem'
            borderRadius='2px'
            justify='flex-start'
            w='100%'
            align='center'
          >
            <Icon mr='1rem' color='Brand.AppleGreen.Reg' as={CgProfile} />
            <Text textTransform='none'>{userInfo.email}</Text>
          </Flex>
          <Flex
            as={Link}
            _hover={{ bgColor: 'Brand.Agate.99' }}
            px='1rem'
            py='.5rem'
            borderRadius='2px'
            justify='flex-start'
            w='100%'
            align='center'
            onClick={attemptTokenRefresh}
          >
            <Icon mr='1rem' color='Brand.AppleGreen.Reg' as={TbCoins} />
            {tokenError.length ? (
              <Text>{tokenError}</Text>
            ) : (
              <Text>tokens: {userInfo.tokens}</Text>
            )}
          </Flex>
          <Flex
            as={Link}
            _hover={{ bgColor: 'Brand.Agate.99' }}
            px='1rem'
            py='.5rem'
            borderRadius='2px'
            justify='flex-start'
            w='100%'
            align='center'
          >
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
  );
};

export default SideBar;
