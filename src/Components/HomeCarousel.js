import React, { useEffect, useState } from 'react'
import girl from '../image.png'
function HomeCarousel() {
  const [quotes, setQuotes] = useState([
    'The best and most beautiful things in the world can not be seen - they must be felt with heart',
    'There is nothing impossible to him who will try',
    'Believe you can and you are halfway there'
  ])
  const [currentQuote, setCurrentQuote] = useState(0);
  const handleDotClick = (index) => {
    setCurrentQuote(index);
  };

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuote((prevIndex) => (prevIndex + 1) % quotes.length);
    },4000);
    return () => clearInterval(intervalId);
  }, [quotes.length]);

  return (
    <>
    <div className='main-heading'>
      <p className='first'>success stories</p>
      <p className='second'>Every success journey </p>
      <p className='second'>we've encountered.</p>
    </div>
    <div className="container">
      <div>
        <img className='girl' src={girl} />
        <div className="header-section">
          <h1 className="title">40%</h1>
          <p className="subtitle">Achieved reduction in project execution time by optimising team availability</p>
        </div>
        <div className="content-section">
          <div className="info-block light">
            <p className="info-value">10 DAYS</p>
            <p className="info-label">Staff Deployment</p>
          </div>
          <div className="info-block dark">
            <p className="info-value">$0.5 <span>MILLION</span></p>
            <p className="info-label">Reduced client expenses.By saving on hiring and employee costs.
            </p>
          </div>

        </div>
      </div>
      <div>
        <div className='carousel'>
          <div className='quote-container'>
            <p>{quotes[currentQuote]}</p>
          </div>
          <div className='dots'>
            {quotes.map((_, index) => (
              <input checked={index===currentQuote} type='radio' key={index} className={`dot ${index === currentQuote ? 'active' : ''}`} onClick={() => handleDotClick(index)}></input>
            ))}
          </div>
        </div>
        <p className="explore-more">
          Explore More <span>&rarr;</span>
        </p>
      </div>
      </div>
      </>
  )
}

export default HomeCarousel