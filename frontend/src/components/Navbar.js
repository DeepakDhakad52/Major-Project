import { AppBar, Box, Button, Container, Dialog, Divider, List, ListItem, ListItemButton, SwipeableDrawer } from '@mui/material'
import React from 'react'
import FitbitRoundedIcon from '@mui/icons-material/FitbitRounded';
// import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp'
import './styles/navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import Avtarr from './pages/Avtarr';



function Navbar({ setIsLoggedIn, isLoggedIn }) {
    const [loginOpen, setLoginOpen] = React.useState(false);
    const [registerOpen, setRegisterOpen] = React.useState(false);
    const [navbarBackground, setNavbarBackground] = React.useState("transparent");
    const [navbarBlur, setNavbarBlur] = React.useState("none");
    const [state, setState] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setNavbarBackground("#ffffffcb");
                setNavbarBlur('blur(7px)');
            } else {
                setNavbarBackground("transparent");
                setNavbarBlur('none')
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
    };

    const handleClickLoginOpen = () => {
        setLoginOpen(true);
    };

    const handleClickRegisterOpen = () => {
        setRegisterOpen(true);
    }

    const handleClose = () => {
        setLoginOpen(false);
        setRegisterOpen(false);
    };

    const toggleDrawer = (open) => (event) => {
        // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return; 
        setState(open);
    };


    const list = () => (
        <Box
            sx={{ width: 'top' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link to='/' className='mobileMenu'>
                            <i className="fa-solid fa-house text-orange-500"></i> Home
                        </Link>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link to='/blog' className='mobileMenu'>
                            <i className="fa-solid fa-blog text-orange-500"></i> Blog
                        </Link>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link to='/about' className='mobileMenu'>
                            <i className="fa-solid fa-address-card text-orange-500"></i> About
                        </Link>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link to='/team' className='mobileMenu'>
                            <i className="fa-solid fa-people-group text-orange-500"></i> Our Team
                        </Link>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link to='/contact' className='mobileMenu'>
                            <i className="fa-solid fa-envelope text-orange-500"></i> Contact Us
                        </Link>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link to='/fund' className='mobileMenu'>
                            <i className="fa-solid fa-sack-dollar text-orange-500 "></i> Fund Raiser
                        </Link>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link to='/education' className='mobileMenu'>
                            <i className="fa-solid fa-school text-orange-500  "></i> Education and Training
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const AuthButtons = () => {
        if (isLoggedIn) {
            return (
                <div className='flex'>
                    <Link><i className="fa-regular fa-heart mr-5  h-full w-full text-lg"></i></Link>
                    <Link><i className="fa-regular fa-bell mr-5  h-full w-full text-lg"></i></Link>
                    <Link><i className="fa-solid fa-cart-shopping mr-5  h-full w-full text-lg"></i></Link>
                    {/* <AddShoppingCartOutlinedIcon sx={{marginRight: '14px'}} fontSize='medium'/> */}
                    <Avtarr handleLogout={handleLogout} />
                </div>
            );
        } else {
            return (
                <div>
                    <Button
                        variant='contained'
                        size='small'
                        onClick={handleClickLoginOpen}
                        className='login-btn'
                    >
                        Login
                    </Button>
                    <Button
                        variant='contained'
                        color='error'
                        size='small'
                        onClick={handleClickRegisterOpen}
                        className='login-btn'
                    >
                        Sign Up
                    </Button>
                </div>
            );
        }
    };

    return (
        <AppBar color='transparent' position='fixed' id='appBar' style={{
            backgroundColor: navbarBackground,
            boxShadow: 'none',
            backdropFilter: navbarBlur
        }}
        >
            <Container>
                <nav className='navbar flex justify-between py-3 ' variant='regular'>
                    <Link onClick={toggleDrawer(true)} className='menuIcon'><i className="fa-solid fa-bars"></i></Link>
                    <SwipeableDrawer
                        anchor={'top'}
                        open={state}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        {list()}
                    </SwipeableDrawer>

                    <Link to='/'><FitbitRoundedIcon fontSize='large' color='primary' className='logo cursor-pointer  hover:text-black rounded-full' /></Link>

                    <NavList />

                    <div className='flex'>
                        <div>
                            <AuthButtons />
                            <Dialog
                                open={loginOpen}
                                onClose={handleClose}
                                className='dialog-box'
                            >
                                <Login
                                    registerOpen={registerOpen}
                                    setLoginOpen={setLoginOpen}
                                    setRegisterOpen={setRegisterOpen}
                                    setIsLoggedIn={setIsLoggedIn}
                                />
                            </Dialog>
                            <Dialog
                                open={registerOpen}
                                onClose={handleClose}
                                className='dialog-box'
                            >
                                <SignUp
                                    loginOpen={loginOpen}
                                    setLoginOpen={setLoginOpen}
                                    setRegisterOpen={setRegisterOpen}
                                />
                            </Dialog>
                        </div>
                    </div>
                </nav>
            </Container>
        </AppBar>
    )
}

const NavList = () => {
    const list_classes = 'nav-item tracking-wider text-sm font-medium cursor-pointer mx-2 px-4 py-1.5 rounded-full text-gray-950 transition-all duration-200 hover:bg-blue-100';
    return (
        <ul className='nav-items flex'>
            <Link to='/'><li className={list_classes} >Home</li></Link>
            <Link to='/education'><li className={list_classes} >Education & Training</li></Link>
            <Link to='/fund'><li className={list_classes} >Fund Raiser</li></Link>
            <Link to='/blog'><li className={list_classes} >Blog</li></Link>
            <Link to='/about'><li className={list_classes}>About</li></Link>
            <Link to='/team'><li className={list_classes} >Our Team</li></Link>
            <Link to='/contact'><li className={list_classes}>Contact Us</li></Link>
        </ul>
    )
}

export default Navbar
