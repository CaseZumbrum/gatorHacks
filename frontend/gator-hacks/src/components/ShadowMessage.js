import React, { useState } from 'react';
import './ShadowMessage.css'


const ShadowMessage = ({sentBy, text}) => {

    let color = '';

    color = (sentBy === "user") ? '#ffffff' : '#e94f4a';

  const MessageStyle = {
      
    backgroundColor: color,
    borderRadius: '20px',
    boxShadow: '0px 4px 4px #00000040',
    left: '0',
    //position: 'relative',   // Flex box issue
    //top: '0',
    padding: '1vw',
    display: 'inline-block',
    maxWidth: '30%',
    wordWrap: 'break-word',
    //marginTop: '1vw'
    marginBottom: '1vw'
    }

  return (      // HAD EXTRA DIV HERE BEFORE
    <div style={MessageStyle}>
        {text}
    </div>
  );
};

export default ShadowMessage;