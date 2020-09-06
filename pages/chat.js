import { ChatProvider } from 'lib/context/chat';
import ChatMessages from 'components/ChatMessages';

const Chat = () => {

  return (
    <ChatProvider>
      <div>Chat</div>
      <ChatMessages />
    </ChatProvider>
  );
}

export default Chat;