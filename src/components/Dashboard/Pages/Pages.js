import Home from './Home';
import Lessons from './Lessons';
import Challenges from './Challenges';
import Explore from './Explore';
import Profile from './Profile';

export const Pages = [
  { path: '/', element: <Home /> },
  { path: 'Lessons', element: <Lessons /> },
  { path: 'Challenges', element: <Challenges /> },
  { path: 'Explore', element: <Explore /> },
  { path: 'Profile', element: <Profile /> },
];
