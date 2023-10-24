import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./styles/login.css";
import { Avatar, Box, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login({ registerOpen, setLoginOpen, setRegisterOpen }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", formData);

    setFormData({
      email: "",
      password: "",
    });
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleRegisterLink = () => {
    if (!registerOpen) {
      setRegisterOpen(true);
      setLoginOpen(false);
    }
  }


  return (
    <div className="align">
      <div className="wrapper">
        <div className="form-box login">
          {/* <h2>Login</h2> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="email"
                onChange={handleOnChange}
                name="email"
                value={formData.email}
                required
              />
              <label htmlFor="email" value="email">
                Email
              </label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                onChange={handleOnChange}
                name="password"
                value={formData.password}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="remember-forgot">
              <label htmlFor="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                Remember Me
              </label>
              <Link href="/forgetpassword">Forgot Password?</Link>
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?{" "}
                <span onClick={handleRegisterLink} className="cursor-pointer hover:underline" >
                  Register
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
