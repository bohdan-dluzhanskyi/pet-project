import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false, // початковий стан модалки
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
