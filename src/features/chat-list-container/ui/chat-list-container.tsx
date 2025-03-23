import { ChatMessageForm } from '@/features/chat-message-form/ui';
import React from 'react';

// import ChatMessageCard from './chat-message-card';

// import ChatLoading from './chat-loading';

const ChatListContainer = () => {
  return (
    <div className="z-40 flex min-h-[92vh] flex-col justify-end">
      {/* Loading */}
      {/* <ChatLoading /> */}
      {/* Messages */}
      {/* <ChatMessageCard isReceived /> */}

      {/* Message input */}
      <ChatMessageForm />
    </div>
  );
};

export default ChatListContainer;
