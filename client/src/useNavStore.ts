import { create } from "zustand";

export const useNavStore = create((set) => ({
  nav: false,
  setIsNav: (nav: boolean) =>
    set((state: any) => {
      return { nav };
    }),
}));
