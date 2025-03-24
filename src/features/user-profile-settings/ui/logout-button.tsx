import { LogIn } from 'lucide-react';
import React from 'react';

const LogoutButton = () => {
  return (
    <div className="bg-destructive flex cursor-pointer items-center justify-between p-2">
      <div className="flex items-center gap-1">
        <LogIn size={16} />
        <span className="text-sm">Logout</span>
      </div>
    </div>
  );
};

export default LogoutButton;
