import React, { useState } from 'react';
import axios from 'axios';


const InputComponent = ({ color, width, height, borderRadius}) => {
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (event) => {
    setUserInput(event.target.value);
    };

    const sendToBackend = () => {
    const backendUrl = 'http://localhost:5000'; // This will need to be changed to the Express port (usually port 5000)

    axios.post(`${backendUrl}/endpoint`, { userInput })
      .then((response) => {
        console.log('Backend response:', response.data);
      })
      .catch((error) => {
        console.error('Error sending data to backend:', error);
      });

  };

  const inputStyle = {
    width: width || '20vw', // Default width if not provided
    height: height || '10vh', // Default height if not provided
    borderRadius: borderRadius || '0',
    paddingLeft: '2vw'
  };

  const buttonStyle = {
    width: '7vw',
    height: '3vw',
    borderRadius: borderRadius || '0',
    marginLeft: '1vw',   // Adjust the margin values as needed
  }


  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter here"
        style={inputStyle}
        className={`${color}`} 
      />
      <button
      style={buttonStyle}
      className={"bg-info"} // send-button
      onClick={() => sendToBackend(userInput)}>
      Send</button>
    </div>
  );
};

export default InputComponent;