import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog'
import Home from './components/Home';
import EducationAndTraining from './components/Education and Training/EducationAndTraining';
import FundRaiser from './components/FundRaiser/FundRaiser';
import About from './components/About';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Profile from './components/Profile';
import Footer from './components/Footer';
import CourseDetails from './components/Education and Training/CourseDetails';
import Course from './components/Education and Training/Course';
import React from 'react';
import NotAuthenticate from './components/Authentication/NotAuthenticate';

function App() {
  const [auth, setAuth] = React.useState(false);
  const checkUserIsAuthenticate = (isLoggedIn) => {
    if(isLoggedIn){
      setAuth(true);
    } else {
      setAuth(false);
    }
  }
  return (
    <Router>
      <Navbar checkUserIsAuthenticate={checkUserIsAuthenticate} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<EducationAndTraining />} />
        <Route path='/fund' element={<FundRaiser />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/team' element={<OurTeam />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/forgetpassword' element={<ForgotPassword/> } /> 
        {
          auth ? <Route path='/profile' element={<Profile />} /> : <Route path='/profile' element={<NotAuthenticate />}/>
        }
        
        <Route path='/course' element={<Course />} />
        <Route path='/course/:id' element={<CourseDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
