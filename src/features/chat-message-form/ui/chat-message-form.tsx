'use client';

import { authValidationSchemas } from '@/entities/auth-validation-schemas';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Paperclip, Send } from 'lucide-react';
import { useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import EmojiPicker from './emoji-picker';

const ChatMessageForm = () => {
  const form = useForm<z.infer<typeof authValidationSchemas.messageSchema>>({
    resolver: zodResolver(authValidationSchemas.messageSchema),
    defaultValues: { text: '', image: '' },
  });

  const { text } = useWatch({ control: form.control });

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSendMessage = (
    values: z.infer<typeof authValidationSchemas.messageSchema>,
  ) => {
    console.log(values);
  };

  const handleEmojiSelect = (emoji: string) => {
    const input = inputRef.current;
    if (!input) return;

    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;

    const newText = text?.slice(0, start) + emoji + text?.slice(end);
    form.setValue('text', newText);

    // setTimeout(() => {
    //   input.setSelectionRange(start + emoji.length, start + emoji.length);
    // }, 0);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSendMessage)}
        className="relative flex w-full"
      >
        <Button size={'icon'} type="button" variant="secondary">
          <Paperclip />
        </Button>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="bg-secondary border-l-muted-foreground border-r-muted-foreground h-9 border-r border-l"
                  placeholder="Type a message"
                  value={field.value}
                  onBlur={() => field.onBlur()}
                  onChange={(e) => field.onChange(e.target.value)}
                  ref={inputRef}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <EmojiPicker handleEmojiSelect={handleEmojiSelect} />

        <Button type="submit" size="icon">
          <Send />
        </Button>
      </form>
    </Form>
  );
};

export default ChatMessageForm;
