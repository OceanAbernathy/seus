import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Lessons = lazy(() => import('./Lessons'));
const Explore = lazy(() => import('./Explore'));
const Profile = lazy(() => import('./Profile'));
const NotFound = lazy(() => import('./NotFound'));

export const Pages = [
  { path: '/', element: <Home /> },
  { path: 'Lessons', element: <Lessons /> },
  { path: 'Explore', element: <Explore /> },
  { path: 'Profile', element: <Profile /> },
  { path: '*', element: <NotFound /> },
];
