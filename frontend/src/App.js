import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home';
import EducationAndTraining from './components/EducationAndTraining';
import FundRaiser from './components/FundRaiser';
import About from './components/About';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<EducationAndTraining />} />
        <Route path='/fund' element={<FundRaiser />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/team' element={<OurTeam />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/forgetpassword' element={<ForgotPassword/> } /> 
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
