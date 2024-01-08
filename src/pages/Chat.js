import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Window, MessageList, MessageInput, LoadingIndicator } from "stream-chat-react";
import 'stream-chat-react/dist/css/index.css';
import { getUserID } from '../util/userData';
const apikey = process.env.REACT_APP_STREAM_KEY

const Chat = () => {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    const initializeChatClient = async () => {
      try {
        const userId = getUserID(); 

        const client = StreamChat.getInstance(apikey);
        await client.connectUser({ id: userId }, client.devToken(userId));
        setChatClient(client);
      } catch (error) {
        console.error('Error initializing chat client:', error);
      }
    };

    initializeChatClient();
  }, []);

  return (
    <div>
      {chatClient ? (
        <Window>
          <MessageList />
          <MessageInput />
        </Window>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
};

export default Chat;
