'use client';

import { useAuthStore } from '@/entities/store/auth-store';
import { SignInForm } from '@/features/sign-in-form';
import { VerifyOtpForm } from '@/features/verify-otp-form';

const AuthContainer = () => {
  const { authStep } = useAuthStore();
  return authStep === 'login' ? <SignInForm /> : <VerifyOtpForm />;
};

export default AuthContainer;
