import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Root = lazy(() => import('./Root'));
const Welcome = lazy(() => import('./Welcome'));
const SignUp = lazy(() => import('./SignUp'));
const SignIn = lazy(() => import('./SignIn'));
// import ResetPassword from './PasswordReset/ResetPassword';
// import CheckEmail from './PasswordReset/CheckEmail';
// import CreateNewPassword from './PasswordReset/CreateNewPassword';
const Intro = lazy(() => import('./Intro/Intro'));
const PickYourLevel = lazy(() => import('./Intro/PickYourLevel'));
const ChooseYourStyle = lazy(() => import('./Intro/ChooseYourStyle'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const NotFound = lazy(() => import('./NotFound'));

export default function SeusRouter() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route exact path='/' end element={<Root />} />
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
          {/* <Route path='/ResetPassword' element={<ResetPassword />} /> */}
          {/* <Route path='/CheckEmail' element={<CheckEmail />} /> */}
          {/* <Route path='/CreateNewPassword' element={<CreateNewPassword />} /> */}
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
