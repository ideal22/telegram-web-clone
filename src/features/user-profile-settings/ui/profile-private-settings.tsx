import { confirmTextSchema } from '@/entities/auth-validation-schemas';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared//ui/dialog';
import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Separator } from '@/shared/ui/separator';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ProfilePrivateSettings = () => {
  const form = useForm<z.infer<typeof confirmTextSchema>>({
    resolver: zodResolver(confirmTextSchema),
    defaultValues: { confirmText: '' },
  });

  function onSubmit(values: z.infer<typeof confirmTextSchema>) {
    console.log(values);
  }
  return (
    <>
      <p className="text-muted-foreground text-center text-xs">
        Are you sure you want to delete your account? This action cannot be
        undone.
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="font-spaceGrotesk mt-2 w-full font-bold"
            variant={'destructive'}
          >
            Delete permenantly
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="confirmText"
                render={({ field }) => (
                  <FormItem>
                    <FormDescription>
                      Please type <span className="font-bold">DELETE</span> to
                      confirm.
                    </FormDescription>
                    <FormControl>
                      <Input className="bg-secondary" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <Button className="w-full font-bold">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfilePrivateSettings;
