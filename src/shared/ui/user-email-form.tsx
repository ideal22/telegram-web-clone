import { authValidationSchemas } from '@/entities/auth-validation-schemas';
import React, { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { Button } from './button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './form';
import { Input } from './input';
import { Label } from './label';

interface Props {
  form: UseFormReturn<z.infer<typeof authValidationSchemas.emailSchema>>;
  onSubmit: (values: z.infer<typeof authValidationSchemas.emailSchema>) => void;
}

const UserEmailForm: FC<Props> = ({ form, onSubmit }) => {
  const onHandleSubmit = (
    values: z.infer<typeof authValidationSchemas.emailSchema>,
  ) => {
    onSubmit(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onHandleSubmit)}
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
  );
};

export default UserEmailForm;
