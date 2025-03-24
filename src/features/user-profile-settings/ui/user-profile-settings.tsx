'use client';

import { Button } from '@/shared/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Separator } from '@/shared/ui/separator';
import { Menu, Settings2 } from 'lucide-react';
import { useState } from 'react';

import LogoutButton from './logout-button';
import MuteToggle from './mute-toggle';
import ProfileCreateContact from './profile-create-contact';
import ProfileSheet from './profile-sheet';
import ProfileThemeToggle from './profile-theme-toggle';

const Settings = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button size={'icon'} variant={'secondary'}>
            <Menu />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <h2 className="text-muted-foreground pt-2 pl-2">
            Settings: <span className="text-white">info@sammi.ac</span>
          </h2>
          <Separator className="my-2" />
          <div className="flex flex-col">
            <div
              className="hover:bg-secondary flex cursor-pointer items-center justify-between p-2"
              onClick={() => setIsProfileOpen(true)}
            >
              <div className="flex items-center gap-1">
                <Settings2 size={16} />
                <span className="text-sm">Profile</span>
              </div>
            </div>

            <ProfileCreateContact />
            <MuteToggle />
            <ProfileThemeToggle />
            <LogoutButton />
          </div>
        </PopoverContent>
      </Popover>

      <ProfileSheet isOpen={isProfileOpen} onOpenChange={setIsProfileOpen} />
    </>
  );
};

export default Settings;
