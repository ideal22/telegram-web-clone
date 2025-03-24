import { Switch } from '@/shared/ui/switch';
import { VolumeOff } from 'lucide-react';
import React from 'react';

const MuteToggle = () => {
  return (
    <div className="hover:bg-secondary flex items-center justify-between p-2">
      <div className="flex items-center gap-1">
        <VolumeOff size={16} />
        <span className="text-sm">Mute</span>
      </div>
      <Switch />
    </div>
  );
};

export default MuteToggle;
