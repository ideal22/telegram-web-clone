'use client';

import { Button } from '@/shared/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import emojies from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Smile } from 'lucide-react';
import { useTheme } from 'next-themes';
import { FC } from 'react';

interface Props {
  handleEmojiSelect: (emoji: string) => void;
}

const EmojiPicker: FC<Props> = ({ handleEmojiSelect }) => {
  const { resolvedTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" type="button" variant="secondary">
          <Smile />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="absolute right-6 bottom-0 rounded-md border-none p-0">
        <Picker
          data={emojies}
          theme={resolvedTheme}
          onEmojiSelect={(emoji: { native: string }) =>
            handleEmojiSelect(emoji.native)
          }
        />
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPicker;
