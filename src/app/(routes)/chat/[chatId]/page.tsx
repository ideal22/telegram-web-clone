import React, { FC } from 'react';

interface Props {
  params: Promise<{
    chatId: string;
  }>;
}

const ChatPage: FC<Props> = async ({ params }) => {
  const { chatId } = await params;
  return <div>ChatPage - {chatId}</div>;
};

export default ChatPage;
