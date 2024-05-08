import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './image.png'
function SuccessMessage() {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    useEffect(() => {
        const timeoutid = setInterval(() => {
            if (count > 1) setCount(prev => prev - 1);
            else {
                navigate('/', { replace: true });
                clearInterval(timeoutid);
            }
        }, 1000);
        return () => clearInterval(timeoutid);
    }, [count])
    return (
        <div className='success'>
       <div>
       <img className='logo success-logo' src={logo} />
       </div>
       <p className='tick'>
            <span>&#10004;</span>
       </p>
        <div className="success-message">
            <p className='first'>success submitted</p>
            <h2>Congratulations!</h2>
            <p>Your request has been successfully submitted to us.</p>
            <p>We will validate your information and reach out to you shortly with updates.</p>
        </div>
        <p>Redirecting you to Homepage in <b>{count} Seconds</b></p>
        </div>
    );
}

export default SuccessMessage;
