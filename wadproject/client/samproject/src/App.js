import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home';

import Signup from './components/signup';
import Login from './components/login';

function App() {
  // const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
      <Routes>
       <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;