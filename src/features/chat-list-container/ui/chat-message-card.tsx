import { cn } from '@/shared/ui/utils';
import { FC } from 'react';

interface Props {
  isReceived?: boolean;
}
const ChatMessageCard: FC<Props> = ({ isReceived }) => {
  return (
    <div
      className={cn(
        'm-2.5 flex text-xs font-medium',
        isReceived ? 'justify-start' : 'justify-end',
      )}
    >
      <div
        className={cn(
          'relative inline max-w-full p-2 pr-12 pl-2.5',
          isReceived ? 'bg-primary' : 'bg-secondary',
        )}
      >
        <p className="text-sm text-white">Hello world</p>
        <span className="absolute right-1 bottom-0 text-xs opacity-60">✓</span>
      </div>
    </div>
  );
};

export default ChatMessageCard;
