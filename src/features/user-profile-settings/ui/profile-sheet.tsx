'use client';
import { Separator } from '@/shared/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/shared/ui/sheet';

import ProfileAccordion from './profile-accordion';
import ProfileAvatar from './profile-avatar';

export default function ProfileSheet({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-80 p-2">
        <SheetHeader>
          <SheetTitle className="text-2xl">My profile</SheetTitle>
          <SheetDescription>
            Setting up your profile will help you connect with your friends and
            family easily.
          </SheetDescription>
        </SheetHeader>

        <Separator className="my-2" />
        <ProfileAvatar />
        <ProfileAccordion />
      </SheetContent>
    </Sheet>
  );
}
