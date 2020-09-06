import { useState, useEffect, useContext, createContext } from 'react';
import { firebaseClient } from 'config/firebaseClient';


const ChatContext = createContext({messages: {}});
const chatRef = firebaseClient.database().ref('chat/');

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState({});


  useEffect(() => {
    chatRef.on('child_added', function(data) {
      // addCommentElement(postElement, data.key, data.val().text, data.val().author);
      console.log("child_added");
      setMessages(prevState => {
        return ({...prevState, [`${data.key}`]: { ...data.val()}})
      })
    });

    chatRef.on('child_changed', function(data) {
      // setCommentValues(postElement, data.key, data.val().text, data.val().author);
      console.log("child_changed");
    });

    chatRef.on('child_removed', function(data) {
      // deleteComment(postElement, data.key);
      console.log('child_removed');
      setMessages(prevState => {
        const state = {...prevState};
        delete state[data.key];
        return state;
      })
    });
  }, []);

  function addMessage(text) {
    const newChatRef = chatRef.push();
    newChatRef.set({
      text,
      createdAt: firebaseClient.database.ServerValue.TIMESTAMP
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
  }

  function updateMessage() {

  }

  function deleteMessage(id) {
    chatRef.child(id).remove();
  }

  return (
    <ChatContext.Provider value={{ messages, addMessage, deleteMessage, updateMessage }}>{children}</ChatContext.Provider>
  );
}

export const useChat = () => {
  return useContext(ChatContext);
};