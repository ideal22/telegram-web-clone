import { Skeleton } from '@/shared/ui/skeleton';
import { FC } from 'react';

import { cn } from '../ui/utils';

interface Props {
  isReceived?: boolean;
}
const MessageSkeleton: FC<Props> = ({ isReceived }) => {
  return (
    <div
      className={cn(
        'm-2.5 flex text-xs font-medium',
        isReceived ? 'justify-start' : 'justify-end',
      )}
    >
      <Skeleton
        className={cn(
          'relative inline p-2 pr-12 pl-2.5',
          isReceived ? 'bg-primary/20' : 'bg-secondary/20',
        )}
      >
        <Skeleton className="h-5 w-36" />
        <span className="absolute right-1 bottom-0 text-xs opacity-60">✓</span>
      </Skeleton>
    </div>
  );
};

export default MessageSkeleton;
