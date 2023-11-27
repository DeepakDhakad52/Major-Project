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
import Footer from './components/Footer';
import CourseDetails from './components/Education and Training/CourseDetails';
import Course from './components/Education and Training/Course';
import React from 'react';
import NotAuthenticate from './components/Authentication/NotAuthenticate';
import CustomSnackbar from './components/Authentication/CustomSnackbar';
import Profile from './components/Education and Training/Profile/Profile';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Router>
      {isLoggedIn ? <CustomSnackbar /> : null}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<EducationAndTraining />} />
        <Route path='/fund' element={<FundRaiser />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/forgetpassword' element={<ForgotPassword />} />
        {
          isLoggedIn ?
            <Route path='/profile' element={<Profile setIsLoggedIn={setIsLoggedIn} />} />
            : <Route path='/profile' element={<NotAuthenticate />} />
        }
        <Route path='/course' element={<Course />} />
        <Route path='/course/:id' element={<CourseDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
