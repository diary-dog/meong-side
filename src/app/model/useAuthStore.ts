import { User } from '@/entities/user/user.dto';
import { create } from 'zustand';

interface AuthState {
  loggedInUser: User | null;
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  setLoggedInUser: (userData: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  loggedInUser: null,
  accessToken: null,
  setAccessToken: (accessToken) => {
    set({ accessToken });
  },
  setLoggedInUser: (userData) => {
    set({ loggedInUser: userData });
  },
}));
