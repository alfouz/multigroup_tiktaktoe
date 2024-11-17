import { create } from "zustand";

interface SettingsStore {
  menuOpened: boolean;
  setMenuOpened: (isOpen: boolean) => void;
}

const useSettingsStore = create<SettingsStore>()((set) => ({
  menuOpened: false,
  setMenuOpened: (isOpen) => set(() => ({ menuOpened: isOpen })),
}));

export default useSettingsStore;
