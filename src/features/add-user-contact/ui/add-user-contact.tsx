'use client';
import { authValidationSchemas } from '@/entities/auth-validation-schemas';
import UserEmailForm from '@/shared/ui/user-email-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaTelegram } from 'react-icons/fa';
import { z } from 'zod';

const AddUserContactForm = () => {
  const userContactForm = useForm<
    z.infer<typeof authValidationSchemas.emailSchema>
  >({
    resolver: zodResolver(authValidationSchemas.emailSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = (
    values: z.infer<typeof authValidationSchemas.emailSchema>,
  ) => {
    console.log(values);
  };
  return (
    <>
      <FaTelegram size={120} className="text-blue-500 dark:text-blue-400" />
      <h1 className="font-space-grotesk text-3xl font-bold">
        Add User to start chatting
      </h1>
      <UserEmailForm form={userContactForm} onSubmit={onSubmit} />
    </>
  );
};

export default AddUserContactForm;
