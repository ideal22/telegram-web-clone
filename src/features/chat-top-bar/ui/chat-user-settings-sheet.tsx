import { Button } from '@/shared/ui/button';
import { Separator } from '@/shared/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';
import UserAvatar from '@/shared/ui/user-avatar';
import { Settings2 } from 'lucide-react';
import Image from 'next/image';

const ChatUserSettingsSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary" className="cursor-pointer">
          <Settings2 />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>
        <div className="relative mx-auto h-36 rounded-full">
          <UserAvatar
            email="eshonkulovnodirbek@gmail.com"
            avatar="https://github.com/shadcn.png"
            avatarStyle="h-36 w-full"
            avatarFallbackStyle="font-spaceGrotesk text-6xl uppercase"
          />
        </div>

        <Separator className="my-2" />

        <h1 className="font-spaceGrotesk text-center text-xl capitalize">
          eshonkulovnodirbek@gmail.com
        </h1>

        <div className="flex flex-col space-y-1 px-4">
          {/* {currentContact?.firstName && ( */}
          <div className="mt-4 flex items-center gap-1">
            <p className="font-spaceGrotesk">First Name: </p>
            <p className="font-spaceGrotesk text-muted-foreground">Nodirbek</p>
          </div>
          {/* )} */}
          {/* {currentContact?.lastName && ( */}
          <div className="mt-4 flex items-center gap-1">
            <p className="font-spaceGrotesk">Last Name: </p>
            <p className="font-spaceGrotesk text-muted-foreground">
              Eshonkulov
            </p>
          </div>
          {/* )} */}
          {/* {currentContact?.bio && ( */}
          <div className="mt-4 flex items-center gap-1">
            <p className="font-spaceGrotesk">
              About:
              <span className="font-spaceGrotesk text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                perspiciatis mollitia aspernatur earum. Blanditiis fugit
                excepturi perferendis hic voluptatem provident, consequatur
                praesentium enim id quas in, sit tempora repudiandae accusamus.
              </span>
            </p>
          </div>
          {/* )} */}

          <Separator className="my-2" />

          <h2 className="text-xl">Image</h2>
          <div className="flex flex-col space-y-2">
            <div className="relative h-36 w-full">
              <Image
                src={'https://github.com/shadcn.png'}
                alt={'https://github.com/shadcn.png'}
                fill
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatUserSettingsSheet;
