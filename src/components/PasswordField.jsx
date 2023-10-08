import {
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Text,
  useDisclosure,
  useMergeRefs,
  Icon,
  Portal,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { forwardRef, useContext, useEffect, useRef } from 'react';
import { Eye, EyeClosed, Question } from '@phosphor-icons/react';
import { Context } from '../Helper/Context';

export const SinglePasswordField = forwardRef((props, ref) => {
  const { password, setPassword, setError } = useContext(Context);

  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current != null) {
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
            onChange={({ target }) => setPassword(target.value) || setError('')}
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
  } = useContext(Context);
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current != null) {
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
          <Flex>
            <Flex
              display='flex'
              alignItems='center'
              position='absolute'
              width='fit-content'
              top={-4}
              gap={1.5}
              px={2}
              ml='22px'
              fontSize='lg'
              bgColor='#B69ED9'
              borderRadius={20}
              zIndex={1}
            >
              Password
              <Popover closeOnBlur={false} placement='right'>
                <PopoverTrigger>
                  <Icon
                    as={Question}
                    boxSize={5}
                    color='brand.primaryDark'
                    weight='bold'
                  />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent
                    width={52}
                    borderColor='brand.primary'
                    borderWidth={2}
                  >
                    <PopoverArrow
                      bgColor='brand.primary'
                      shadow='-1px 1px 0 #8656CD'
                    />
                    <PopoverCloseButton color='gray.800' />
                    <PopoverBody
                      bgColor='brand.primary'
                      color='white'
                      fontSize='sm'
                    >
                      Password must have a minimum of 6 characters, at least 1
                      uppercase letter, 1 lowercase letter, and 1 number with no
                      spaces.
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Flex>
          </Flex>
          <Input
            position='relative'
            onChange={({ target }) => setPassword(target.value) || setError('')}
            value={password}
            id='password'
            ref={mergeRef}
            name='password'
            type={isOpen ? 'text' : 'password'}
            autoComplete='current-password'
            placeholder='Enter a password'
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
              setConfirmPassword(target.value) || setError('')
            }
            value={confirmPassword}
            id='password-confirm'
            ref={mergeRef}
            name='password-confirm'
            type={isOpen ? 'text' : 'password'}
            autoComplete='current-password'
            placeholder='Confirm password'
            required
            _focusVisible={{ outline: 'none' }}
            {...props}
          />
        </InputGroup>
      </FormControl>
    </Flex>
  );
});
