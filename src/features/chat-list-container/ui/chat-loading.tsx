import { MessageSkeleton } from '@/shared/skeletons';

const ChatLoading = () => {
  return (
    <>
      <MessageSkeleton isReceived />
      <MessageSkeleton isReceived />
      <MessageSkeleton isReceived />
      <MessageSkeleton />
      <MessageSkeleton />
      <MessageSkeleton isReceived />
      <MessageSkeleton />
      <MessageSkeleton isReceived />
      <MessageSkeleton isReceived />
      <MessageSkeleton />
      <MessageSkeleton />
      <MessageSkeleton isReceived />
      <MessageSkeleton />
    </>
  );
};

export default ChatLoading;
