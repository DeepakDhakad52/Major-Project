import { AppBar, Button, Container, Dialog, Toolbar } from '@mui/material'
import React from 'react'
import FitbitRoundedIcon from '@mui/icons-material/FitbitRounded';
import Login from './Login';
import Register from './Register'
import { Link } from 'react-router-dom';

function Navbar() {
    const [loginOpen, setLoginOpen] = React.useState(false);
    const [registerOpen, setRegisterOpen] = React.useState(false);
    const [navbarBackground, setNavbarBackground] = React.useState("transparent");
    // const [navbarColor, setNavbarColor] = React.useState("white");

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setNavbarBackground("white");
        // setNavbarColor("black");
      } else {
        setNavbarBackground("transparent");
        // setNavbarColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    const handleClickLoginOpen = () => {
        setLoginOpen(true);
    };

    const handleClickRegisterOpen = () =>{
        setRegisterOpen(true);
    }

    const handleClose = () => {
        setLoginOpen(false);
        setRegisterOpen(false);
    };


    const list_classes = 'nav-item tracking-wider text-sm font-medium cursor-pointer mx-2 px-4 py-1.5 rounded-full text-white';

    return (
        <AppBar color='transparent' position='fixed' id='appBar' style={{
            backgroundColor: navbarBackground,
            boxShadow:'none'
          }}>
            <Container>
                <Toolbar className='flex justify-between' variant='regular'>
                    <Link to='/'><FitbitRoundedIcon fontSize='large' color='primary' className='cursor-pointer  hover:text-white rounded-full' /></Link>
                    <ul className='flex'>
                        <Link to='/'><li className={list_classes} style={{color:'#000'}}>Home</li></Link>
                        <Link to='/education'><li className={list_classes} style={{color:'#000'}}>Education & Training</li></Link>
                        <Link to='/fund'><li className={list_classes} style={{color:'#000'}}>Fund Raiser</li></Link>
                        <Link to='/blog'><li className={list_classes} style={{color:'#000'}}>Blog</li></Link>
                        <Link to='/about'><li className={list_classes} style={{color:'#000'}}>About</li></Link>
                        <Link to='/team'><li className={list_classes} style={{color:'#000'}}>Our Team</li></Link>
                        <Link to='/contact'><li className={list_classes} style={{color:'#000'}}>Contact Us</li></Link>
                    </ul>
                    <div className='flex'>
                        <div >
                            <Button variant='contained' size='small' onClick={handleClickLoginOpen} className='login-btn'>
                                Login 
                            </Button>
                            <Dialog
                                open={loginOpen}
                                onClose={handleClose}
                                className='dialog-box'
                            >
                                <Login registerOpen={registerOpen} setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} />
                            </Dialog>
                            <Button variant='contained' color='error' size='small' onClick={handleClickRegisterOpen} className='login-btn'>
                                Register 
                            </Button>
                            <Dialog
                                open={registerOpen}
                                onClose={handleClose}
                                className='dialog-box'
                            >
                                <Register loginOpen={loginOpen} setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} />
                            </Dialog>
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
