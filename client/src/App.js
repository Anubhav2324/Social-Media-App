import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from "react";
import Logo from '../src/img/icons8-twitter.svg';
import darkLogo from '../src/img/icons8-twitter.svg';
function App() {
  const user = useSelector((state) => state.authReducer.authData)
  const [dark,setDark] = useState(false)

  const handleClick = () => {
    setDark(!dark)
    if(dark){
    document.body.style.setProperty('--yellow', '#00c8ff')
  document.body.style.setProperty('--orange', '#04ccfc')
  document.body.style.setProperty('--black', '#242d49')
  document.body.style.setProperty('--gray', 'rgba(36, 45, 73, 0.65)')
  document.body.style.setProperty('--profileShadow', '0px 4px 17px 2px rgba(0, 0, 0, 0.25)')
  document.body.style.setProperty('--hrColor', '#cfcdcd')
  document.body.style.setProperty('--cardColor', 'rgba(255, 255, 255, 0.64)')
  document.body.style.setProperty('--buttonBg', 'linear-gradient(98.63deg, #04ccfc 0%, #00b2ef 100%)')
  document.body.style.setProperty('--inputColor', 'rgba(40, 52, 62, 0.07)')
  document.body.style.setProperty('--photo', '#4CB256')
  document.body.style.setProperty('--video', '#4A4EB7')
  document.body.style.setProperty('--location', '#EF5757')
  document.body.style.setProperty('--schedule', '#E1AE4A')
  document.body.style.setProperty('--appbg', '#f3f3f3')
  document.body.style.setProperty('--followerstext', 'black')
  document.body.style.setProperty('--iconColor', 'invert(60%) sepia(97%) saturate(1409%) hue-rotate(149deg) brightness(99%) contrast(101%)')
    }
    else{
      document.body.style.setProperty('--yellow', '#f5c32c')
  document.body.style.setProperty('--orange', '#fca61f')
  document.body.style.setProperty('--black', '#242d49')
  document.body.style.setProperty('--gray', 'rgba(36, 45, 73, 0.65)')
  document.body.style.setProperty('--profileShadow', '0px 4px 17px 2px rgba(0, 0, 0, 0.25)')
  document.body.style.setProperty('--hrColor', '#cfcdcd')
  document.body.style.setProperty('--cardColor', 'white')
  document.body.style.setProperty('--buttonBg', 'linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)')
  document.body.style.setProperty('--inputColor', 'rgba(40, 52, 62, 0.07)')
  document.body.style.setProperty('--photo', '#4CB256')
  document.body.style.setProperty('--video', '#4A4EB7')
  document.body.style.setProperty('--location', '#EF5757')
  document.body.style.setProperty('--schedule', '#E1AE4A')
  document.body.style.setProperty('--appbg', 'black')
  document.body.style.setProperty('--followerstext', 'white')
  document.body.style.setProperty('--iconColor', 'invert(74%) sepia(69%) saturate(6271%) hue-rotate(338deg) brightness(98%) contrast(100%)')
    }

  }
  return (
    <div className="App">
      <img src={Logo} alt='' onClick={handleClick}/>
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ bottom: '18%', left: '-8rem' }}></div>
      <Routes>
        <Route path="/" element={user ? <Navigate to="home" /> : <Navigate to="auth" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="../auth" />} />
        <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />} />
        <Route path="/profile/:id" element={user ? <Profile/> :<Navigate to="../auth" />} />
      </Routes>
    </div>
  );
}

export default App;
