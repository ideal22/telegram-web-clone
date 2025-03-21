import { cn } from './utils';

type UserOnlineStatusProps = {
  isOnline: boolean;
};

export const UserStatusIndicator = ({ isOnline }: UserOnlineStatusProps) => {
  return (
    <div
      className={cn(`absolute right-0 bottom-0 !z-50 size-2.5 rounded-full`, {
        'bg-green-500': isOnline,
        'bg-gray-400': !isOnline,
      })}
    />
  );
};
