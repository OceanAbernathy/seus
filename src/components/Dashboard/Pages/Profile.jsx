import {
  Avatar,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { Auth } from '../../auth';
import { db } from '../../../config/firebase';
import { useEffect, useState } from 'react';
import { doc, getDocs, collection, updateDoc } from 'firebase/firestore';
import { auth } from '../../../config/firebase';

import ProfileBackground from '../../../images/ProfileBackground.png';

import { Users } from '../UsersData';
import { Check, PencilLine, X } from '@phosphor-icons/react';

export default function Profile() {
  // const [userList, setUserList] = useState([]);
  // const [updatedName, setUpdatedName] = useState('');

  // const userCollectionRef = collection(db, 'instructors');

  // const getUserList = async () => {
  //   try {
  //     const data = await getDocs(userCollectionRef);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setUserList(filteredData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getUserList();
  // }, [userList]);

  // const updateName = async (id) => {
  //   const nameDoc = doc(db, 'instructors', id);
  //   await updateDoc(nameDoc, { name: updatedName });
  // };

  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    setEditing(!editing);
  };

  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex
        pt={9}
        pb={7}
        justifyContent='center'
        bgColor='brand.darkGray'
        position='relative'
      >
        <Avatar
          position='absolute'
          left={4}
          name='Ocean Abernathy'
          bgColor='brand.lightGray'
          color='brand.primary'
        />
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Profile
        </Text>
      </Flex>

      {/* <Text fontSize='2xl' color='green'>
        {auth?.currentUser?.email}
      </Text> */}
      {/* <Auth /> */}

      {/* <div>
        {userList.map((user, index) => (
          <div key={index}>
            <h1>{user.name}</h1>
            <input
              placeholder='Change Instructor Name...'
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <button onClick={() => updateName(user.id)}>Update</button>
          </div>
        ))}
      </div> */}

      <Flex flexDirection='column' overflow='scroll' height='82.5%'>
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
          <Flex flexDirection='column'>
            <Text>Editing</Text>
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
        ) : (
          <Flex flexDirection='column' width='100%'>
            <Text>Normal</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
