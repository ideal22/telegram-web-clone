import { IUser } from '@/shared/lib/types';
import { create } from 'zustand';

interface CurrentUserStore {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser) => void;
}

export const useCurrentUserStore = create<CurrentUserStore>()((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
