import {
  ClipboardText,
  Globe,
  Guitar,
  House,
  User,
} from '@phosphor-icons/react';

export const NavData = [
  {
    id: 1,
    label: 'Home',
    path: '/Dashboard',
    icon: <House />,
  },
  {
    id: 2,
    label: 'Lessons',
    path: 'Lessons',
    icon: <ClipboardText />,
  },
  {
    id: 3,
    label: 'Challenges',
    path: 'Challenges',
    icon: <Guitar />,
  },
  {
    id: 4,
    label: 'Explore',
    path: 'Explore',
    icon: <Globe />,
  },
  {
    id: 5,
    label: 'Profile',
    path: 'Profile',
    icon: <User />,
  },
];
