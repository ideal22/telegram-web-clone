import { useAudio } from '@/shared/hooks';
import { SOUNDS } from '@/shared/lib/constants';
import { Button } from '@/shared/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Separator } from '@/shared/ui/separator';
import { Switch } from '@/shared/ui/switch';
import { cn } from '@/shared/ui/utils';
import { ChevronDown, PlayCircle } from 'lucide-react';
import React, { useState } from 'react';

const ProfileNotificationSettings = () => {
  const [selectedSound, setSelectedSound] = useState('');

  const { playSound } = useAudio();

  const onPlaySound = (value: string) => {
    setSelectedSound(value);
    playSound(value);
  };

  return (
    <>
      <div className="relative flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-spaceGrotesk">Notification Sound</p>
          <p className="font-spaceGrotesk text-muted-foreground text-xs">
            Apple
          </p>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button size={'sm'}>
              Select <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="absolute -right-12 w-80">
            <div className="flex flex-col space-y-1">
              {SOUNDS.map((sound) => (
                <div
                  className={cn(
                    'bg-secondary hover:bg-primary-foreground flex cursor-pointer items-center justify-between',
                    selectedSound === sound.value && 'bg-primary-foreground',
                  )}
                  key={sound.label}
                  onClick={() => onPlaySound(sound.value)}
                >
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className="justify-start"
                  >
                    {sound.label}
                  </Button>
                  <Button size={'icon'} variant={'ghost'}>
                    <PlayCircle />
                  </Button>
                </div>
              ))}
            </div>
            <Button className="mt-2 w-full font-bold">Submit</Button>
          </PopoverContent>
        </Popover>
      </div>
      <Separator className="my-3" />
      <div className="relative flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-spaceGrotesk">Sending Sound</p>
          <p className="font-spaceGrotesk text-muted-foreground text-xs">
            Apple
          </p>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button size={'sm'}>
              Select <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="absolute -right-12 w-80">
            <div className="flex flex-col space-y-1">
              {SOUNDS.map((sound) => (
                <div
                  className={cn(
                    'bg-secondary hover:bg-primary-foreground flex cursor-pointer items-center justify-between',
                    selectedSound === sound.value && 'bg-primary-foreground',
                  )}
                  key={sound.label}
                  onClick={() => onPlaySound(sound.value)}
                >
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className="justify-start"
                  >
                    {sound.label}
                  </Button>
                  <Button size={'icon'} variant={'ghost'}>
                    <PlayCircle />
                  </Button>
                </div>
              ))}
            </div>
            <Button className="mt-2 w-full font-bold">Submit</Button>
          </PopoverContent>
        </Popover>
      </div>
      <Separator className="my-3" />
      <div className="relative flex items-center justify-between">
        <div className="flex flex-col">
          <p>Mode Mute</p>
          <p className="text-muted-foreground text-xs">Muted</p>
        </div>
        <Switch />
      </div>
    </>
  );
};

export default ProfileNotificationSettings;
