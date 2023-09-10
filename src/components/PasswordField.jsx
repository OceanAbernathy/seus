import {
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react';
import { forwardRef, useContext, useEffect, useRef } from 'react';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import { Context } from '../Helper/Context';

export const SinglePasswordField = forwardRef((props, ref) => {
  const { password, setPassword, setError, setEmailError, setPasswordError } =
    useContext(Context);
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef < HTMLInputElement > null;

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <Flex flexDirection='column' gap='15px'>
      <FormControl>
        <FormLabel htmlFor='password' />
        <InputGroup>
          <InputRightElement>
            <IconButton
              tabIndex={-1}
              variant='link'
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={
                isOpen ? <EyeClosed weight='bold' /> : <Eye weight='bold' />
              }
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            onChange={({ target }) =>
              setPassword(target.value) ||
              setEmailError('') ||
              setPasswordError('') ||
              setError('')
            }
            value={password}
            id='password'
            ref={mergeRef}
            name='password'
            type={isOpen ? 'text' : 'password'}
            autoComplete='current-password'
            placeholder='Password'
            required
            _focusVisible={{ outline: 'none' }}
            {...props}
          />
        </InputGroup>
      </FormControl>
    </Flex>
  );
});

export const DoublePasswordField = forwardRef((props, ref) => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    setError,
    setEmailError,
    setPasswordError,
  } = useContext(Context);
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef < HTMLInputElement > null;

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  useEffect(() => {
    setPassword('');
    setConfirmPassword('');
  }, []);

  return (
    <Flex flexDirection='column' gap='15px'>
      <FormControl>
        <FormLabel htmlFor='password' />
        <InputGroup>
          <InputRightElement>
            <IconButton
              tabIndex={-1}
              variant='link'
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={
                isOpen ? <EyeClosed weight='bold' /> : <Eye weight='bold' />
              }
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Text
            width='fit-content'
            position='absolute'
            top={-4}
            px={2}
            ml='22px'
            fontSize='lg'
            bgColor='#B69ED9'
            borderRadius={20}
            zIndex={1}
          >
            Password
          </Text>
          <Input
            position='relative'
            onChange={({ target }) =>
              setPassword(target.value) ||
              setEmailError('') ||
              setPasswordError('') ||
              setError('')
            }
            value={password}
            id='password'
            ref={mergeRef}
            name='password'
            type={isOpen ? 'text' : 'password'}
            autoComplete='current-password'
            placeholder='Enter your password...'
            required
            _focusVisible={{ outline: 'none' }}
            {...props}
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='password' />
        <InputGroup>
          <InputRightElement>
            <IconButton
              tabIndex={-1}
              variant='link'
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={
                isOpen ? <EyeClosed weight='bold' /> : <Eye weight='bold' />
              }
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Text
            width='fit-content'
            position='absolute'
            top={-4}
            px={2}
            ml='22px'
            fontSize='lg'
            bgColor='#B69ED9'
            borderRadius={20}
            zIndex={1}
          >
            Confirm Password
          </Text>
          <Input
            position='relative'
            onChange={({ target }) =>
              setConfirmPassword(target.value) ||
              setEmailError('') ||
              setPasswordError('') ||
              setError('')
            }
            value={confirmPassword}
            id='password-confirm'
            ref={mergeRef}
            name='password-confirm'
            type={isOpen ? 'text' : 'password'}
            autoComplete='current-password'
            placeholder='Confirm your password...'
            required
            _focusVisible={{ outline: 'none' }}
            {...props}
          />
        </InputGroup>
      </FormControl>
    </Flex>
  );
});

export const CreateNewPasswordField = forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef < HTMLInputElement > null;

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <Flex flexDirection='column' gap='2'>
      <FormControl>
        <FormLabel htmlFor='password' />
        <InputGroup>
          <InputRightElement>
            <IconButton
              tabIndex={-1}
              variant='link'
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={
                isOpen ? <EyeClosed weight='bold' /> : <Eye weight='bold' />
              }
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            id='password'
            ref={mergeRef}
            name='password'
            type={isOpen ? 'text' : 'password'}
            autoComplete='current-password'
            placeholder='Password'
            required
            _focusVisible={{ outline: 'none' }}
            {...props}
          />
        </InputGroup>
        <Text px='5' pt='1'>
          Must be at least 8 characters.
        </Text>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='password' />
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant='link'
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={
                isOpen ? <EyeClosed weight='bold' /> : <Eye weight='bold' />
              }
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            id='password-confirm'
            ref={mergeRef}
            name='password-confirm'
            type={isOpen ? 'text' : 'password'}
            autoComplete='current-password'
            placeholder='Confirm Password'
            required
            _focusVisible={{ outline: 'none' }}
            {...props}
          />
        </InputGroup>
        <Text px='5' pt='1'>
          Both passwords must match.
        </Text>
      </FormControl>
    </Flex>
  );
});
