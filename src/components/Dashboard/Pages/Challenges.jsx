import { Flex, Text } from '@chakra-ui/react';
import { Auth } from '../../auth';
import { db } from '../../../config/firebase';
import { useEffect, useState } from 'react';
import { doc, getDocs, collection, updateDoc } from 'firebase/firestore';
import { auth } from '../../../config/firebase';

export default function Challenges() {
  const [userList, setUserList] = useState([]);
  const [updatedName, setUpdatedName] = useState('');

  const userCollectionRef = collection(db, 'instructors');

  const getUserList = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserList();
  }, [userList]);

  const updateName = async (id) => {
    const nameDoc = doc(db, 'instructors', id);
    await updateDoc(nameDoc, { name: updatedName });
  };

  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex pt={9} pb={7} justifyContent='center' bgColor='brand.darkGray'>
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Challenges
        </Text>
      </Flex>
      <Text fontSize='2xl' color='green'>
        {auth?.currentUser?.email}
      </Text>
      <Auth />

      <div>
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
      </div>
    </Flex>
  );
}
