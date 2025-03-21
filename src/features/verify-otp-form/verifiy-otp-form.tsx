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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/shared/ui/input-otp';
import { Label } from '@/shared/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const Verify = () => {
  const { email } = useAuthStore();
  const form = useForm<z.infer<typeof authValidationSchemas.otpSchema>>({
    resolver: zodResolver(authValidationSchemas.otpSchema),
    defaultValues: { email, otp: '' },
  });

  const router = useRouter();

  function onSubmit(_values: z.infer<typeof authValidationSchemas.otpSchema>) {
    router.push('/');
  }

  return (
    <div className="w-full">
      <p className="text-muted-foreground text-center text-sm">
        We have sent you an email with a verification code to your email
        address. Please enter the code below.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
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
                    disabled
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <Label>One-Time Password</Label>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    className="animate-caret-blink w-full"
                    pattern={REGEXP_ONLY_DIGITS}
                    {...field}
                  >
                    <InputOTPGroup className="w-full">
                      <InputOTPSlot
                        index={0}
                        className="dark:bg-primary-foreground bg-secondary w-full"
                      />
                      <InputOTPSlot
                        index={1}
                        className="dark:bg-primary-foreground bg-secondary w-full"
                      />
                      <InputOTPSlot
                        index={2}
                        className="dark:bg-primary-foreground bg-secondary w-full"
                      />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup className="w-full">
                      <InputOTPSlot
                        index={3}
                        className="dark:bg-primary-foreground bg-secondary w-full"
                      />
                      <InputOTPSlot
                        index={4}
                        className="dark:bg-primary-foreground bg-secondary w-full"
                      />
                      <InputOTPSlot
                        index={5}
                        className="dark:bg-primary-foreground bg-secondary w-full"
                      />
                    </InputOTPGroup>
                  </InputOTP>
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

export default Verify;
