import { ChatListContainer } from '@/features/chat-list-container/ui';
import { ChatTopBar } from '@/features/chat-top-bar/ui';
import React, { FC } from 'react';

interface Props {
  params: Promise<{
    chatId: string;
  }>;
}

const ChatPage: FC<Props> = async ({ params }) => {
  const { chatId } = await params;
  return (
    <div className="relative w-full">
      <ChatTopBar />
      <ChatListContainer />
    </div>
  );
};

export default ChatPage;
