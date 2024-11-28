import { create } from 'zustand';

import { User } from '@/entities/user/user.dto';

interface UserState {
  loggedInUser: User | null;
  setLoggedInUser: (userData: User | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  loggedInUser: null,
  setLoggedInUser: (userData) => {
    set({ loggedInUser: userData });
  },
}));
