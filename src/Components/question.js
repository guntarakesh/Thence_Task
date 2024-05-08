import React, { useState } from 'react';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const icon = isOpen ? '-' : '+';

  return (
    <div className="collapsible">
      <div className="header" onClick={toggleCollapse}>
        <div className='content cquestion'>{question}</div>
        <span className='symbol'>{icon}</span>
      </div>
      {isOpen && <div className="content canswer">{answer}</div>}
    </div>
  );
};

export default Question;
