import { UserProfileSettings } from '@/features/user-profile-settings/ui';
import { Input } from '@/shared/ui/input';

const SidebarSettings = () => {
  return (
    <div className="bg-background sticky top-0 flex items-center pl-2">
      <UserProfileSettings />
      <div className="m-2 w-full">
        <Input className="bg-secondary" type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SidebarSettings;
