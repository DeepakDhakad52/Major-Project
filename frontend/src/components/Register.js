import React from 'react'

const Register = ({ loginOpen, setLoginOpen, setRegisterOpen }) => {
    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        password: '',
        agreeToTerms: false,
    });

    // Handle input changes and update the state
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        setFormData({
            username: '',
            email: '',
            password: '',
            agreeToTerms: false,
        });
    };

    
  const handleLoginClick = () => {
    if(!loginOpen){
      setLoginOpen(true);
      setRegisterOpen(false);
    }
  }

  return (
    <div className="align">
            <div className="wrapper">
                <div className="form-box register">
                    <h2>Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="person"></ion-icon></span>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="Username">Username</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label htmlFor="checkbox">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    required
                                />
                                I agree to the terms & conditions
                            </label>
                        </div>
                        <button type="submit" className="btn">Register</button>
                        <div className="login-register">
                            <p>Already have an account? <span to="/login" onClick={handleLoginClick} className='cursor-pointer hover:underline'>Login</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register
