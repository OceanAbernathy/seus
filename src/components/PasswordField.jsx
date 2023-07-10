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
import { forwardRef, useContext, useRef } from 'react';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import { Context } from '../Helper/Context';

export const SinglePasswordField = forwardRef((props, ref) => {
  const { password, setPassword, setEmailError, setPasswordError } =
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
              setPasswordError('')
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

  return (
    <Flex flexDirection='column' gap='15px'>
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
            onChange={({ target }) =>
              setPassword(target.value) ||
              setEmailError('') ||
              setPasswordError('')
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
            onChange={({ target }) =>
              setConfirmPassword(target.value) ||
              setEmailError('') ||
              setPasswordError('')
            }
            value={confirmPassword}
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
