import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './Spinner';

const Root = lazy(() => import('./Root'));
const Welcome = lazy(() => import('./Welcome'));
const SignUp = lazy(() => import('./SignUp'));
const SignIn = lazy(() => import('./SignIn'));
const ResetPassword = lazy(() => import('./PasswordReset/ResetPassword'));
const CheckEmail = lazy(() => import('./PasswordReset/CheckEmail'));
const Intro = lazy(() => import('./Intro/Intro'));
const PickYourLevel = lazy(() => import('./Intro/PickYourLevel'));
const ChooseYourStyle = lazy(() => import('./Intro/ChooseYourStyle'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const NotFound = lazy(() => import('./NotFound'));

export default function SeusRouter() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path='/' end element={<Root />} />
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/CheckEmail' element={<CheckEmail />} />
          <Route path='/Intro' element={<Intro />} />
          <Route path='/PickYourLevel' element={<PickYourLevel />} />
          <Route path='/ChooseYourStyle' element={<ChooseYourStyle />} />
          <Route path='/Dashboard/*' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
