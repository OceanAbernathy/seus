import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Welcome from './Welcome';
import SignUp from './SignUp';
import SignIn from './SignIn';
// import ResetPassword from './PasswordReset/ResetPassword';
// import CheckEmail from './PasswordReset/CheckEmail';
// import CreateNewPassword from './PasswordReset/CreateNewPassword';
import Intro from './Intro/Intro';
import PickYourLevel from './Intro/PickYourLevel';
import ChooseYourStyle from './Intro/ChooseYourStyle';
import Dashboard from './Dashboard/Dashboard';

export default function SeusRouter() {
  return (
    <>
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
      </Routes>
    </>
  );
}
