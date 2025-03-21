import { SidebarSettings } from '@/features/sidebar-settings/ui';
import { UsersList } from '@/features/users-list/ui';

const Sidebar = () => {
  return (
    <>
      <SidebarSettings />
      <UsersList />
    </>
  );
};

export default Sidebar;
