import { Route,Routes } from 'react-router-dom';
import Home from '../home';
import Signup from './signup';
import Login from './login';

function Auth() {
  return (
    <div className='App'>
      <Routes>
       <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default Auth;