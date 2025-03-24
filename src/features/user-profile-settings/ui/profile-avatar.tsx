'use client';
import { Button } from '@/shared/ui/button';
import UserAvatar from '@/shared/ui/user-avatar';
import { Upload } from 'lucide-react';

export default function ProfileAvatar() {
  return (
    <div className="relative mx-auto h-36 w-1/2">
      <UserAvatar
        email="info@sammi.ac"
        avatar="https://github.com/shadcn.png"
        avatarFallbackStyle="font-spaceGrotesk text-6xl uppercase"
        avatarStyle="h-36 w-full"
      />
      <Button size="icon" className="absolute right-0 bottom-0">
        <Upload size={16} />
      </Button>
    </div>
  );
}
