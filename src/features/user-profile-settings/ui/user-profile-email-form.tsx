import {
  authValidationSchemas,
  oldEmailSchema,
} from '@/entities/auth-validation-schemas';
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
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const EmailForm = () => {
  const [verify, setVerify] = useState(false);

  const emailForm = useForm<z.infer<typeof oldEmailSchema>>({
    resolver: zodResolver(oldEmailSchema),
    defaultValues: { email: '', oldEmail: 'info@sammi.ac' },
  });

  const otpForm = useForm<z.infer<typeof authValidationSchemas.otpSchema>>({
    resolver: zodResolver(authValidationSchemas.otpSchema),
    defaultValues: { otp: '', email: '' },
  });

  function onEmailSubmit(values: z.infer<typeof oldEmailSchema>) {
    console.log(values);
    otpForm.setValue('email', values.email);
    setVerify(true);
  }

  function onVerifySubmit(
    values: z.infer<typeof authValidationSchemas.otpSchema>,
  ) {
    console.log(values);
  }

  return !verify ? (
    <Form {...emailForm}>
      <form
        onSubmit={emailForm.handleSubmit(onEmailSubmit)}
        className="space-y-2"
      >
        <FormField
          control={emailForm.control}
          name="oldEmail"
          render={({ field }) => (
            <FormItem>
              <Label>Current email</Label>
              <FormControl>
                <Input className="bg-secondary h-10" disabled {...field} />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={emailForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label>Enter a new email</Label>
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
        <Button type="submit" className="w-full">
          Verify email
        </Button>
      </form>
    </Form>
  ) : (
    <Form {...otpForm}>
      <form
        onSubmit={otpForm.handleSubmit(onVerifySubmit)}
        className="space-y-2"
      >
        <Label>New email</Label>
        <Input
          className="bg-secondary h-10"
          disabled
          value={emailForm.watch('email')}
        />
        <FormField
          control={otpForm.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <Label>One-Time Password</Label>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  className="w-full"
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
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default EmailForm;
