import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Icon,
  IconButton,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  Barbell,
  Check,
  IdentificationBadge,
  Palette,
  PencilLine,
  X,
} from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import ProfileBackground from '../../../images/ProfileBackground.png';
import { Context } from '../../../Helper/Context';

export default function Profile() {
  const { user } = useContext(Context);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    setEditing(!editing);
  };

  useEffect(() => {
    document.title = 'Profile - SEUS';
  }, []);

  return (
    user && (
      <Flex height='100vh' flexDirection='column'>
        <Flex
          pt={9}
          pb={7}
          justifyContent='center'
          bgColor='brand.darkGray'
          position='relative'
        >
          <Text fontSize='3xl' fontWeight='medium' color='white'>
            Profile
          </Text>
        </Flex>

        <Flex flexDirection='column' height='82.5%' gap={16}>
          <Flex position='relative'>
            <Image src={ProfileBackground} objectFit='cover' />
            <Avatar
              // as={User}
              name='Ocean Abernathy'
              bgColor='brand.lightGray'
              color='brand.primary'
              size='xl'
              position='absolute'
              bottom={-10}
              left='50%'
              transform='translate(-50%)'
            />
            <Button
              onClick={handleClick}
              width='fit-content'
              alignSelf='end'
              position='absolute'
              top='5'
              right='5'
              p={3}
              gap={1}
              variant='profileEdit'
              display={editing ? 'none' : 'flex'}
            >
              <Text fontSize='sm' letterSpacing='normal'>
                Edit
              </Text>
              <Icon weight='fill' boxSize={3} as={PencilLine} />
            </Button>
          </Flex>

          {editing ? (
            <Flex flexDirection='column' mx={6} gap={3}>
              <FormControl display='flex' alignItems='center' mb={1}>
                <Icon
                  boxSize={8}
                  color='brand.mediumGray'
                  as={IdentificationBadge}
                  alignSelf='start'
                />
                <Flex flexDirection='column'>
                  <FormLabel my={0} mx={6}>
                    Full Name
                  </FormLabel>
                  <Input
                    placeholder={user.personalInfo.displayName}
                    variant='text3'
                    ml={4}
                    width='auto'
                    type='text'
                  />
                </Flex>
              </FormControl>

              <Divider borderColor='white' width='70%' margin='0 auto' />

              <FormControl display='flex' alignItems='center'>
                <Icon
                  boxSize={8}
                  color='brand.mediumGray'
                  as={Barbell}
                  alignSelf='start'
                />
                <Flex flexDirection='column'>
                  <FormLabel my={0} mx={6}>
                    Skill Level
                  </FormLabel>
                  <RadioGroup defaultValue={user.preferences.level}>
                    <Stack ml={6} spacing={2}>
                      <Radio value='Beginner'>Beginner</Radio>
                      <Radio value='Intermediate'>Intermediate</Radio>
                      <Radio value='Advanced'>Advanced</Radio>
                    </Stack>
                  </RadioGroup>
                </Flex>
              </FormControl>

              <Divider borderColor='white' width='70%' margin='0 auto' />

              <FormControl display='flex' alignItems='center'>
                <Icon
                  boxSize={8}
                  color='brand.mediumGray'
                  as={Palette}
                  alignSelf='start'
                />
                <Flex flexDirection='column'>
                  <FormLabel my={0} mx={6}>
                    Preferred Style
                  </FormLabel>
                  <CheckboxGroup defaultValue={user.preferences.style}>
                    <Grid
                      ml={6}
                      rowGap={2}
                      columnGap={5}
                      gridTemplateColumns='1fr 1fr 1fr'
                    >
                      <Checkbox variant='profile' value='Blues'>
                        Blues
                      </Checkbox>
                      <Checkbox variant='profile' value='Classical'>
                        Classical
                      </Checkbox>
                      <Checkbox variant='profile' value='Metal'>
                        Metal
                      </Checkbox>
                      <Checkbox variant='profile' value='Folk'>
                        Folk
                      </Checkbox>
                      <Checkbox variant='profile' value='Jazz'>
                        Jazz
                      </Checkbox>
                      <Checkbox variant='profile' value='Bluegrass'>
                        Bluegrass
                      </Checkbox>
                      <Checkbox variant='profile' value='Rock'>
                        Rock
                      </Checkbox>
                      <Checkbox variant='profile' value='Country'>
                        Country
                      </Checkbox>
                      <Checkbox variant='profile' value='Reggae'>
                        Reggae
                      </Checkbox>
                      <Checkbox variant='profile' value='Fusion'>
                        Fusion
                      </Checkbox>
                      <Checkbox variant='profile' value='Funk'>
                        Funk
                      </Checkbox>
                      <Checkbox variant='profile' value='Pop'>
                        Pop
                      </Checkbox>
                    </Grid>
                  </CheckboxGroup>
                </Flex>
              </FormControl>
              <Flex justifyContent='center' mt={3} gap={8}>
                <IconButton
                  as={X}
                  onClick={handleClick}
                  display={!editing ? 'none' : 'flex'}
                  weight='bold'
                  boxSize={12}
                  p={3}
                  bgColor='brand.primary'
                  cursor='pointer'
                />
                <IconButton
                  as={Check}
                  onClick={handleClick}
                  display={!editing ? 'none' : 'flex'}
                  weight='bold'
                  boxSize={12}
                  p={3}
                  bgColor='brand.secondary'
                  cursor='pointer'
                />
              </Flex>
            </Flex>
          ) : (
            <Flex flexDirection='column' mx={6} gap={3}>
              <FormControl
                isDisabled={true}
                display='flex'
                alignItems='center'
                mb={1}
              >
                <Icon
                  boxSize={8}
                  color='brand.primary'
                  as={IdentificationBadge}
                  alignSelf='start'
                />
                <Flex flexDirection='column'>
                  <FormLabel color='brand.mediumGray' my={0} mx={6}>
                    Full Name
                  </FormLabel>
                  <Input
                    placeholder={user.personalInfo.displayName}
                    variant='text2'
                    ml={4}
                    width='auto'
                    type='text'
                  />
                </Flex>
              </FormControl>

              <Divider borderColor='white' width='70%' margin='0 auto' />

              <FormControl isDisabled={true} display='flex' alignItems='center'>
                <Icon
                  boxSize={8}
                  color='brand.primary'
                  as={Barbell}
                  alignSelf='start'
                />
                <Flex flexDirection='column'>
                  <FormLabel color='brand.mediumGray' my={0} mx={6}>
                    Skill Level
                  </FormLabel>
                  <RadioGroup defaultValue={user.preferences.level}>
                    <Stack ml={6} spacing={2}>
                      <Radio value='Beginner'>Beginner</Radio>
                      <Radio value='Intermediate'>Intermediate</Radio>
                      <Radio value='Advanced'>Advanced</Radio>
                    </Stack>
                  </RadioGroup>
                </Flex>
              </FormControl>

              <Divider borderColor='white' width='70%' margin='0 auto' />

              <FormControl isDisabled={true} display='flex' alignItems='center'>
                <Icon
                  boxSize={8}
                  color='brand.primary'
                  as={Palette}
                  alignSelf='start'
                />
                <Flex flexDirection='column'>
                  <FormLabel my={0} mx={6}>
                    Preferred Style
                  </FormLabel>
                  <CheckboxGroup defaultValue={user.preferences.style}>
                    <Grid
                      ml={6}
                      rowGap={2}
                      columnGap={5}
                      gridTemplateColumns='1fr 1fr 1fr'
                    >
                      <Checkbox variant='profile' value='Blues'>
                        Blues
                      </Checkbox>
                      <Checkbox variant='profile' value='Classical'>
                        Classical
                      </Checkbox>
                      <Checkbox variant='profile' value='Metal'>
                        Metal
                      </Checkbox>
                      <Checkbox variant='profile' value='Folk'>
                        Folk
                      </Checkbox>
                      <Checkbox variant='profile' value='Jazz'>
                        Jazz
                      </Checkbox>
                      <Checkbox variant='profile' value='Bluegrass'>
                        Bluegrass
                      </Checkbox>
                      <Checkbox variant='profile' value='Rock'>
                        Rock
                      </Checkbox>
                      <Checkbox variant='profile' value='Country'>
                        Country
                      </Checkbox>
                      <Checkbox variant='profile' value='Reggae'>
                        Reggae
                      </Checkbox>
                      <Checkbox variant='profile' value='Fusion'>
                        Fusion
                      </Checkbox>
                      <Checkbox variant='profile' value='Funk'>
                        Funk
                      </Checkbox>
                      <Checkbox variant='profile' value='Pop'>
                        Pop
                      </Checkbox>
                    </Grid>
                  </CheckboxGroup>
                </Flex>
              </FormControl>
              <Flex>
                <Button
                  onClick={handleClick}
                  width='fit-content'
                  p={3}
                  gap={1}
                  variant='profileEdit'
                  display={!editing ? 'none' : 'flex'}
                >
                  <Text fontSize='sm' letterSpacing='normal'>
                    Cancel
                  </Text>
                  <Icon weight='bold' boxSize={3} as={X} />
                </Button>
                <Button
                  onClick={handleClick}
                  width='fit-content'
                  p={3}
                  gap={1}
                  variant='profileEdit'
                  display={!editing ? 'none' : 'flex'}
                >
                  <Text fontSize='sm' letterSpacing='normal'>
                    Save
                  </Text>
                  <Icon weight='bold' boxSize={3} as={Check} />
                </Button>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    )
  );
}
