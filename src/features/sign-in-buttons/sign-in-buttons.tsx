'use client';

import { Button } from '@/shared/ui/button';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SignInButtons = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-1">
      <Button>
        <span>Sign up with google</span>
        <FaGoogle />
      </Button>
      <Button>
        <span>Sign up with github</span>
        <FaGithub />
      </Button>
    </div>
  );
};

export default SignInButtons;
