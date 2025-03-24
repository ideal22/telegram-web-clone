import { UserPlus } from 'lucide-react';
import React from 'react';

const ProfileCreateContact = () => {
  return (
    <div className="hover:bg-secondary flex cursor-pointer items-center justify-between p-2">
      <div className="flex items-center gap-1">
        <UserPlus size={16} />
        <span className="text-sm">Create contact</span>
      </div>
    </div>
  );
};

export default ProfileCreateContact;
