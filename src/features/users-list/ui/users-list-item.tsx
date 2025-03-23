'use client';

import { type IUser } from '@/shared/lib/types';
import UserAvatar from '@/shared/ui/user-avatar';
import { UserStatusIndicator } from '@/shared/ui/user-status-indicator';
import { cn } from '@/shared/ui/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface Props {
  user: IUser;
}

const UsersListItem: FC<Props> = ({ user }) => {
  const pathname = usePathname();
  const isActive = pathname === `/chat/${user._id}`;

  return (
    <Link href={`/chat/${user._id}`} className="block">
      <div
        className={cn(
          'hover:bg-secondary/50 flex cursor-pointer items-center justify-between p-2',
          isActive && 'bg-secondary/50',
        )}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <UserAvatar email={user.email} avatar={user.avatar} />
            <UserStatusIndicator isOnline />
          </div>
          <div>
            <h2 className="line-clamp-1 text-sm capitalize">
              {user.email.split('@')[0]}
            </h2>
            <p className="text-muted-foreground line-clamp-1 text-xs">
              No messages yet
            </p>
          </div>
        </div>
        <div className="self-end">
          <p className="text-muted-foreground text-xs">22:22 pm</p>
        </div>
      </div>
    </Link>
  );
};

export default UsersListItem;
