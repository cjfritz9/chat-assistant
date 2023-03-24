import React, { useContext, useState } from 'react';
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react';
import { validateLoginInputs } from '../../utils/helpers';
import { loginUser } from '../../api';
import { LoginRegisterProps } from '../../models/props';
import { SiteContext } from '../../context/SiteContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC<LoginRegisterProps> = ({ setFormState }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const { isLoading, setIsLoading, setIsLoggedIn, setUserInfo } =
    useContext<any>(SiteContext);
  const navigate = useNavigate();

  const handleSuccess = () => {
    setSuccess(true);
    setIsLoading(true);
    setTimeout(() => {
      navigate('/chat');
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = async () => {
    setIsFetching(true);
    const validationResponse = validateLoginInputs(
      formData.email,
      formData.password
    );
    if (validationResponse !== 'valid inputs') {
      setIsFetching(false);
      return setError(validationResponse);
    }
    const response = await loginUser(formData);
    if (await response) {
      if (typeof response !== 'string') {
        if (response.email === formData.email) {
          setUserInfo(response);
          setIsLoggedIn(true);
          handleSuccess();
        }
      }
      if (response.includes('Error')) {
        console.log('here?');
        setIsFetching(false);
        setError(response);
      }
    }
    console.log(response);
  };

  return (
    <Container w='100%' h='100%' justifyContent='center' alignItems='center'>
      <Stack
        opacity={isLoading ? '0' : '1'}
        transition='opacity .5s ease-out'
        boxShadow='0 0 5px #38A3A5'
        py='4rem'
        px='3rem'
        align='center'
        borderRadius='5px'
        w='520px'
        h='fit-content'
        bgColor='Brand.Malachite.99'
        gap='2rem'
      >
        <Heading variant='authHeading'>Login</Heading>
        <Stack w='75%' gap='1rem'>
          <Stack>
            <Text variant='authLabel'>Email Address</Text>
            <Input
              _focus={{ border: '2px solid #DDD', boxShadow: 'none' }}
              onFocus={() => setError('')}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </Stack>
          <Stack>
            <Text variant='authLabel'>Password</Text>
            <Input
              _focus={{ border: '2px solid #DDD', boxShadow: 'none' }}
              type='password'
              onFocus={() => setError('')}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </Stack>
          <Stack w='75%' align='center' gap='.75rem'></Stack>
          <Button
            isDisabled={error.length ? true : false}
            w='100%'
            bgColor='#EEE'
            color={error.length ? 'red' : 'Brand.Agate.Reg'}
            onClick={handleSubmit}
          >
            {success ? (
              'Login Successful'
            ) : error.length ? (
              error
            ) : isFetching ? (
              <Spinner />
            ) : (
              'Submit'
            )}
          </Button>
          <Flex gap='4px' color='#EEE'>
            <Text>Need an account?</Text>
            <Text
              _hover={{ color: 'white' }}
              cursor='pointer'
              color='#EEE'
              textDecor='underline'
              onClick={() => setFormState('register')}
            >
              Sign up.
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Login;
