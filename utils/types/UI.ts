import { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: string;
}

export interface RecentSearch {
  id: string;
  title: string;
}

export interface BackProp {
  onClick: () => void;
}

export interface Service {
  id: string;
  title: string;
  providers: number;
}

export interface ActivityProp {
  id: string;
  type: string;
  amount: number;
  date: string;
}

export type WalletAction = 'withdraw' | 'deposit';

export interface BalanceProp {
  onOpenModal: () => void;
  onSetModal: (type: 'withdraw' | 'deposit') => void;
}

export interface SuccessProp {
  title?: string;
  description?: string;
  image?: ReactNode;
}

export interface ScreenHeaderProps {
  title: string;
  hasBell?: boolean;
}

export interface Booking {
  id: string;
  userAvatar: ReactNode;
  name: string;
  charge: number;
  service: string;
  location: string;
  rating: number;
}
