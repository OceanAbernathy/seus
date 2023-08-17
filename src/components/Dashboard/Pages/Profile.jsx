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
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../config/firebaseConfig';

export default function Profile() {
  const { user } = useContext(Context);

  const [displayName, setDisplayName] = useState('');
  const [editing, setEditing] = useState(false);
  const [level, setLevel] = useState('');
  const [style, setStyle] = useState([]);

  const handleClick = () => {
    setEditing(!editing);
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setStyle((style) => [...style, value]);
    } else {
      setStyle(style.filter((e) => e !== value));
    }
  };

  const getProfile = async () => {
    try {
      const dataRef = doc(db, 'users', user.uid);
      const data = await getDoc(dataRef);
      setDisplayName(data.data().personalInfo.displayName);
      setLevel(data.data().preferences.level);
      setStyle(data.data().preferences.style);
    } catch (error) {
      // console.log(error);
    }
  };

  const updateProfile = async () => {
    const userRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userRef, {
        'personalInfo.displayName': displayName,
        'preferences.level': level,
        'preferences.style': style,
      });
      setEditing(!editing);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    document.title = 'Profile - SEUS';
  }, [user]);

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
              name={user.personalInfo.displayName}
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
                    onChange={({ target }) => setDisplayName(target.value)}
                    value={displayName}
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
                  <RadioGroup
                    defaultValue={user.preferences.level}
                    onChange={setLevel}
                  >
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
                      <Checkbox
                        variant='profile'
                        value='Blues'
                        onChange={handleChange}
                      >
                        Blues
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Classical'
                        onChange={handleChange}
                      >
                        Classical
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Metal'
                        onChange={handleChange}
                      >
                        Metal
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Folk'
                        onChange={handleChange}
                      >
                        Folk
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Jazz'
                        onChange={handleChange}
                      >
                        Jazz
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Bluegrass'
                        onChange={handleChange}
                      >
                        Bluegrass
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Rock'
                        onChange={handleChange}
                      >
                        Rock
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Country'
                        onChange={handleChange}
                      >
                        Country
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Reggae'
                        onChange={handleChange}
                      >
                        Reggae
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Fusion'
                        onChange={handleChange}
                      >
                        Fusion
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Funk'
                        onChange={handleChange}
                      >
                        Funk
                      </Checkbox>
                      <Checkbox
                        variant='profile'
                        value='Pop'
                        onChange={handleChange}
                      >
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
                  onClick={updateProfile}
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
                    value={displayName}
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
            </Flex>
          )}
        </Flex>
      </Flex>
    )
  );
}
