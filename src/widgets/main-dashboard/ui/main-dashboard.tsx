import { AddUserContactForm } from '@/features/add-user-contact/ui';

const MainDashboard = () => {
  return (
    <div className="relative z-40 flex h-screen w-full">
      <div className="z-50 flex w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <AddUserContactForm />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
