import React, { useState, useEffect } from 'react';
import axios from 'axios';


const InputBox = ({ handleNewMessage }) => {

    const [userInput, setUserInput] = useState('');

    useEffect(() => {
      console.log('User Input has been updated: ' + userInput);
    }, [userInput]);

    // Handles when the user submits
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
        console.log("User Input: " + event.target.value)
    };
    
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        sendToBackend();
      }
    };

    const sendToBackend = async () => {
        // Handles rendering user message immediately
        console.log("My message:" + userInput)
        await handleNewMessage({
            sentBy: 'user',
            text: userInput,
        });

        axios.post('http://127.0.0.1:5000', {
        source: "react",
        message: userInput
    }).then (async response => {
      //Handles what the AI returns
        var message = JSON.parse(response.data.message.content).message //AI message.
        console.log("AI message:" + message)
        await handleNewMessage({
          sentBy: 'app',
          text: message,
          recs: JSON.parse(response.data.message.content).recommended_products,
          followups: JSON.parse(response.data.message.content).followup_questions,
          terms: JSON.parse(response.data.message.content).key_terms
      })
            
        });
        setUserInput('')  // Clears the previous input



    // SENDS TO BACKEND - Justin and Case LOOK HERE
    const backendUrl = 'http://localhost:5000'; // This should be the express port number

    axios.post(`${backendUrl}/endpoint`, { userInput })
      .then((response) => {
        console.log('Backend response:', response.data);    // used in testing, console in window
      })
      .catch((error) => {
        console.error('Error sending data to backend:', error); // should display the error in console if rendering fails
      });
    };


  // Making a pretty-looking input box

  const inputStyle = {
    backgroundColor: 'white',
    border: '3px solid transparent',
    boxShadow: "0px 4px 4px #00000040",

    display: "flex",
    alignItems: "flex-start",
    position: 'fixed',

    marginLeft: '4vw',
    borderRadius: '10vw',
    padding: "2vh",
    width: "40vw",
    marginBottom: "1vw",
  };

  const buttonStyle = {
    backgroundColor: 'white',
    border: '3px solid transparent',
    boxShadow: "0px 4px 4px #00000040",
    position: 'fixed',

    width: '5vw',
    height: '3.5vw',
    borderRadius: '20px',
    marginLeft: '46vw',
  }

  const keyTermStyle1 = {
    backgroundColor: 'white',
    border: '3px solid transparent',
    boxShadow: "0px 4px 4px #00000040",
    position: 'fixed',

    width: '12vw',
    height: '4vw',
    borderRadius: '20px',
    marginLeft: '4vw',
    marginBottom: '1vw'
  }

  const keyTermStyle2 = {
    backgroundColor: 'white',
    border: '3px solid transparent',
    boxShadow: "0px 4px 4px #00000040",
    position: 'fixed',

    width: '12vw',
    height: '4vw',
    borderRadius: '20px',
    marginLeft: '17vw',
    marginBottom: '1vw'
  }

  const keyTermStyle3 = {
    backgroundColor: 'white',
    border: '3px solid transparent',
    boxShadow: "0px 4px 4px #00000040",
    position: 'fixed',

    width: '12vw',
    height: '4vw',
    borderRadius: '20px',
    marginLeft: '30vw',
    marginBottom: '1vw'
  }


  return (
    <div>
    <div class="row">
      
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter here"
        style={inputStyle}
      />

      <button
      style={buttonStyle}
      className={"#fffff"} // send-button
      onClick={() => sendToBackend(userInput)}>
      ✉️</button>
      
        
    </div>
      <br></br>
      <br></br>
      <br></br>
    
    <button
        style={keyTermStyle1}
        className={"#fffff"} // send-button
        onClick={() => sendToBackend({sentBy: "user", text:"poopity poop"})}>
        Butot2382n 383819Sdhhd1</button>
    <button
        style={keyTermStyle2}
        className={"#fffff"} // send-button
        onClick={() => sendToBackend({sentBy: "user", text:"poopity poop"})}>
        Butotn 2</button>
      <button
        style={keyTermStyle3}
        className={"#fffff"} // send-button
        onClick={async () => {
          setUserInput('A New Request')
          console.log('What User Input should be: ' + userInput)
          await sendToBackend()
          console.log("Sent to the backend.")
        }
        }>
        Button 3</button>
    </div>
    
  );
};

export default InputBox;