import UserAvatar from '@/shared/ui/user-avatar';

import ChatUserSettingsSheet from './chat-user-settings-sheet';

const ChatTopBar = () => {
  return (
    <div className="className='w-full bg-background' sticky top-0 z-50 flex h-[8vh] items-center justify-between border-b p-2">
      <div className="flex items-center">
        <UserAvatar
          email="test@mail.ru"
          avatar="https://github.com/shadcn.png"
        />
        <div className="ml-2">
          <h2 className="text-sm font-medium">test@mail.ru</h2>
          {/* IsTyping */}
          {/* <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <p className="text-secondary-foreground line-clamp-1 animate-pulse">
              Hello world
            </p>
            <div className="mb-1 self-end">
              <div className="flex items-center justify-center gap-1">
                <div className="bg-secondary-foreground h-1 w-1 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
                <div className="bg-secondary-foreground h-1 w-1 animate-bounce rounded-full [animation-delay:-0.10s]"></div>
                <div className="bg-secondary-foreground h-1 w-1 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
              </div>
            </div>
          </div> */}
          <p className="text-xs">
            {/* Online */}
            {/* <span className="text-green-500">●</span> Online */}
            {/* Offline */}
            <span className="text-muted-foreground">●</span> Last seen recently
          </p>
        </div>
      </div>

      <ChatUserSettingsSheet />
    </div>
  );
};

export default ChatTopBar;
