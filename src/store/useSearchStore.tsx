import { create } from 'zustand';

type InputState = {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
};

export const useSearchStore = create<InputState>(set => ({
  searchInput: '',
  setSearchInput: (searchInput: string) => set({ searchInput }),
}));
