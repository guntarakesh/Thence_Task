import React, { useDebugValue, useState } from 'react'
import logo from './image.png'
import { useNavigate } from 'react-router-dom';
import { validate } from 'react-email-validator';
function Form() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isValid,setIsValid] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
        const {value} = e.target;
        if(e.target.id === 'name') setName(value);
        else setEmail(value);
        setIsValid((name && email));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = validate(email);
    if (!isEmailValid) {
      setSubmitError(isEmailValid ? 'Please enter your name.' : 'Please enter a valid email address.');
    } else {
      setName('');
      setEmail('');
      setSubmitError('');
      navigate('/sucess', { replace: true });
    }
  };
  const handleClose = () => {
    navigate('/', { replace: true });
  }
  return (
    <>
      <div className='whole-form'>
        <div className='topform'>
          <img className='logo' src={logo} />
          <div onClick={handleClose} className='cross'>
            <div className='line line1'></div>
            <div className='line mline'></div>
            <div className='line line2'></div>
          </div>
        </div>
        <div className='registration-form'>
          <form>
            <h2 style={{color:'green',fontFamily:'cursive'}}>Registration Form</h2>
            <h2>Start your success journey here!</h2>
            <input
              className='btn name'
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder='Enter your name'
            />
            <input
              className='btn email'
              type='email'
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder='Enter your email'
            />
            {submitError && <p className="error-message">{submitError}</p>}
            <button onClick={handleSubmit} disabled={!isValid} className='btn submit' type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form