import React, { useState } from 'react';
import './LoginF.css';
import { FaUser, FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleForm = () => {
    setIsLogin(prevState => !prevState);
    setIsForgotPassword(false);
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setError('');
  };

  const showForgotPasswordForm = () => {
    setIsForgotPassword(true);
    setIsLogin(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isForgotPassword) {
      // Validate if new password and confirm password match
      if (password !== confirmPassword) {
        setError('Passwords do not match');
      } else {
        setError('');
        // Handle forgot password logic here
        console.log("Resetting password for:", email);
        console.log("New password:", password);
      }
    } else if (isLogin) {
      // Handle login logic here
      console.log("Logging in with:", password);
    } else {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
      } else {
        setError('');
        // Handle registration logic here
        console.log("Registering with:", password);
      }
    }
  };

  return (
    <div>
      <div className='weapper'>
        <form onSubmit={handleSubmit}>
          <h1>{isForgotPassword ? "Forgot Password" : isLogin ? "Login" : "Register"}</h1>
          {isForgotPassword ? (
            <>
              <div className='input-box'>
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <FaEnvelope className='icon' />
              </div>
              <div className='input-box'>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder='New Password'
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={togglePasswordVisibility} className='icon'>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className='input-box'>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder='Confirm New Password'
                  required 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span onClick={togglePasswordVisibility} className='icon'>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {error && <div className='error'>{error}</div>} {/* Display error message */}
              <div><button type='submit'>Reset Password</button></div>
              <div className='register-link'>
                <p>Remembered your password? <a href="#" onClick={() => { setIsForgotPassword(false); setIsLogin(true); }}>Login</a></p>
              </div>
            </>
          ) : isLogin ? (
            <>
              <div className='input-box'>
                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />
              </div>
              <div className='input-box'>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={togglePasswordVisibility} className='icon'>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className='remember-forgot'>
                <label><input type="checkbox" />Remember me</label>
                <a href="#" onClick={showForgotPasswordForm}>Forgot password</a>
              </div>
              <div><button type='submit'>Login</button></div>
              <div className='register-link'>
                <p>Don't have an account? <a href="#" onClick={toggleForm}>Register</a></p>
              </div>
            </>
          ) : (
            <>
              <div className='input-box'>
                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />
              </div>
              <div className='input-box'>
                <input type="email" placeholder='Email' required />
                <FaEnvelope className='icon' />
              </div>
              <div className='input-box'>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={togglePasswordVisibility} className='icon'>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className='input-box'>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder='Confirm Password'
                  required 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span onClick={togglePasswordVisibility} className='icon'>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {error && <div className='error'>{error}</div>} {/* Display error message */}
              <div className='remember-forgot'>
                <label><input type="checkbox" />I agree to the terms & conditions</label>
              </div>
              <div><button type='submit'>Register</button></div>
              <div className='register-link'>
                <p>Already have an account? <a href="#" onClick={toggleForm}>Login</a></p>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
