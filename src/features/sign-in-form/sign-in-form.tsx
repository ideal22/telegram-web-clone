'use client';
import { authValidationSchemas } from '@/entities/auth-validation-schemas';
import { useAuthStore } from '@/entities/store/auth-store';
import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label>Email</Label>
                <FormControl>
                  <Input
                    placeholder="info@sammi.ac"
                    className="bg-secondary h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" size={'lg'}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
