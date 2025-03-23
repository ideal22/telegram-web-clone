'use client';
import { authValidationSchemas } from '@/entities/auth-validation-schemas';
import { useAuthStore } from '@/entities/store/auth-store';
import UserEmailForm from '@/shared/ui/user-email-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const SignInForm = () => {
  const form = useForm<z.infer<typeof authValidationSchemas.emailSchema>>({
    resolver: zodResolver(authValidationSchemas.emailSchema),
    defaultValues: { email: '' },
  });

  const { setEmail, setAuthStep } = useAuthStore();

  function onSubmit(values: z.infer<typeof authValidationSchemas.emailSchema>) {
    setEmail(values.email);
    setAuthStep('verify');
  }

  return (
    <div className="w-full">
      <p className="text-muted-foreground text-center text-sm">
        Telegram is a messaging app with a focus on speed and security, it’s
        super-fast, simple and free.
      </p>
      <UserEmailForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default SignInForm;
