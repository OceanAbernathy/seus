import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export async function getLessons() {
  try {
    const lessons = await getDocs(collection(db, 'lessons'));
    let lessonsList = [];
    lessons.forEach((doc) => {
      lessonsList.push(doc.data());
    });
    return lessonsList;
  } catch (error) {
    console.log(error);
  }
}

export async function getInstructors() {
  try {
    const instructors = await getDocs(collection(db, 'instructors'));
    let instructorList = [];
    instructors.forEach((doc) => {
      instructorList.push(doc.data());
    });
    return instructorList;
  } catch (error) {
    console.log(error);
  }
}
