import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function Avtarr({ handleLogout }) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={'https://mui.com/static/images/avatar/2.jpg'} />
            </IconButton>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <Link to='/profile'>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                </Link>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    );
}
