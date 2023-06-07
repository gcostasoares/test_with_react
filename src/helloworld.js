import React, { useState } from 'react';

const HelloWorld = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello, World!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p color='blue'>{message}</p>
    </div>
  );
};

export default HelloWorld;
