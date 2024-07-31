import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashborad from './components/Dashborad';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';

function App() {
  return (
     
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Dashborad' element={<Dashborad/>}></Route>
        <Route path='/pageNotFound' element={<pageNotfound/>}></Route>
        <Route path='/App1' element={<App1/>}></Route>
        <Route path='/App2' element={<App2/>}></Route>
        <Route path='/App3' element={<App3/>}></Route>
        <Route path='/App4' element={<App4/>}></Route>
        <Route path='/App5' element={<App5/>}></Route>
     
      
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
