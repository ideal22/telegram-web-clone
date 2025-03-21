import { create } from 'zustand';

import { AuthStepType } from './auth-store-types';

interface AuthStore {
  authStep: AuthStepType;
  setAuthStep: (step: AuthStepType) => void;
  email: string;
  setEmail: (email: string) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  authStep: 'login',
  setAuthStep: (step) => set({ authStep: step }),
  email: '',
  setEmail: (email) => set({ email }),
}));
