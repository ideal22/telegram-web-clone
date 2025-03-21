import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Menu } from 'lucide-react';

const SidebarSettings = () => {
  return (
    <div className="bg-background sticky top-0 flex items-center pl-2">
      <Button size="icon" variant="secondary">
        <Menu />
      </Button>
      <div className="m-2 w-full">
        <Input className="bg-secondary" type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SidebarSettings;
