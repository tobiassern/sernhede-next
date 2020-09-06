import { useState } from 'react';
import { useChat } from 'lib/context/chat';
import moment from 'moment';

const ChatMessages = () => {

  const [message, setMessage] = useState('');

  const { messages, addMessage, deleteMessage } = useChat();

  return (
    <div>
      <div>Chatmessages</div>
      <ul>
        {Object.keys(messages).map((item, index) => {
          const data = messages[item];
          const dateTime = moment.unix(data.createdAt / 1000).format("YYYY-MM-DD HH:mm:ss");
          return (
            <li key={item}>
              <p style={{whiteSpace: 'break-spaces', lineHeight: '12px'}}>{data.text}</p> 
              <p>{dateTime}</p> 
              <button onClick={() => deleteMessage(item)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <textarea 
        value={message} 
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={() => {
        if(message) addMessage(message);
        setMessage('');
      }
      }>Add message</button>
    </div>
  );
}

export default ChatMessages;