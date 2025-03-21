import { Loader2 } from 'lucide-react';
import React from 'react';

const Loader = () => {
  return (
    <div className="flex h-[95vh] w-full items-center justify-center">
      <Loader2 className="animate-spin" size={50} />
    </div>
  );
};

export default Loader;
