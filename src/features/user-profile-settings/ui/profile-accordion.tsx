import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';

import InformationForm from './profile-information-form';
import ProfileNotificationSettings from './profile-notification-settings';
import ProfilePrivateSettings from './profile-private-settings';
import EmailForm from './user-profile-email-form';

const ProfileAccordion = () => {
  return (
    <Accordion type="single" collapsible className="mt-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-secondary px-2">
          Basic information
        </AccordionTrigger>
        <AccordionContent className="mt-2 px-2">
          <InformationForm />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="mt-2">
        <AccordionTrigger className="bg-secondary px-2">Email</AccordionTrigger>
        <AccordionContent className="mt-2 px-2">
          <EmailForm />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="mt-2">
        <AccordionTrigger className="bg-secondary px-2">
          Notifications and Sounds
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          <ProfileNotificationSettings />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="mt-2">
        <AccordionTrigger className="bg-secondary px-2">
          Private Settings
        </AccordionTrigger>
        <AccordionContent className="my-2 px-2">
          <ProfilePrivateSettings />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProfileAccordion;
