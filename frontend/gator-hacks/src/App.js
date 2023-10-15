
// IMPORTS

// Base Libraries and Files
import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// CSS
import './App.css';
import './components/ShadowMessage.css'

// Components
// import InputComponent from './components/InputComponent';
import ShadowMessage from './components/ShadowMessage';
import InputBox from './components/InputBox';
import LinkBoxContainer from './components/LinkBoxContainer';
import LinkBox from './components/LinkBox';

function App() {

  // Establishes the useState "list" that holds values
  const [terms, setTerms] = useState([]);
  const [recs,setRecs] = useState([]);
  const [messages, setMessages] = useState([]/*[

    { sentBy: 'app', text: 'Follow up Welcome Question' },  // Default starting messages
    { sentBy: 'app', text: 'Example Welcome Message' },
  ]*/);
  var prev_message = 'test'
  const handleNewMessage = async (message) => {
    if(message.sentBy ==='app'){ //handles messages sent by the APP
    
    await setRecs([...message.recs])
    console.log("recs: " + message.recs)
    await setTerms([...message.terms])
    console.log("terms: " + message.terms)
    }
    //Handles messages sent by the APP and the USER.
    await setMessages([...messages,prev_message, message]);
    console.log("WI'm being called!" + messages.length + " with " + message.text)
    for(var i = 0; i < messages.length; i++){
      console.log(i + " ==> " + messages[i].text)
    }
    prev_message = message
    return 1
  };

  
  // Handles automatically scrolling down in chat
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container whenever messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]); // Trigger the scroll whenever messages change



  // Note: the useState magic in the "wrapper" div
  // InputBox calls the function handleNewMessage to add the new message
  return (
    <div>

      <div className="chat-box">
        <div ref={chatContainerRef} className="wrapper">
          {messages.map((message, index) => (
            <ShadowMessage key={index} sentBy={message.sentBy} text={message.text} />
          ))}
        </div>
        <div className="input-box">
          <InputBox handleNewMessage={handleNewMessage}/>
        </div>
        
      
    
      </div>
      
      <div className="link-box">
      {recs.length > 0 && recs.map(rec => (
  
            <LinkBox text={rec.name} price={rec.price} desc={rec.description}/>

      ))}
      </div>
    </div>
  );
}



export default App;
