import React, { useContext, useState } from 'react';
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text
} from '@chakra-ui/react';
import { validateRegistrationInputs } from '../../utils/helpers';
import { registerUser } from '../../api';
import { LoginRegisterProps } from '../../models/props';
import { SiteContext } from '../../context/SiteContext';

const Register: React.FC<LoginRegisterProps> = ({ setFormState }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPass: ''
  });
  const [error, setError] = useState('');
  const { setIsLoggedIn, setUserInfo } = useContext<any>(SiteContext);

  const handleSubmit = async () => {
    const validationResponse = validateRegistrationInputs(
      formData.email,
      formData.password,
      formData.confirmPass
    );
    if (validationResponse !== 'valid inputs') {
      return setError(validationResponse);
    }
    const response = await registerUser({
      email: formData.email,
      password: formData.password
    });
    console.log(response);
  };

  return (
    <Container>
      <Container w='100%' h='100%' justifyContent='center' alignItems='center'>
        <Stack
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
          <Heading variant='authHeading'>Register</Heading>
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
            <Stack>
              <Text variant='authLabel'>Confirm Password</Text>
              <Input
                _focus={{ border: '2px solid #DDD', boxShadow: 'none' }}
                type='password'
                onFocus={() => setError('')}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    confirmPass: e.target.value
                  }))
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
              {error.length ? error : 'Submit'}
            </Button>
            <Flex gap='4px' color='#EEE'>
              <Text>Have an account?</Text>
              <Text
                _hover={{ color: 'white' }}
                cursor='pointer'
                color='#EEE'
                textDecor='underline'
                onClick={() => setFormState('login')}
              >
                Log in.
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};

export default Register;
