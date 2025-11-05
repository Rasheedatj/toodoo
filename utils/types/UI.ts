import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: string;
  bookingId?: string;
}

export interface RecentSearch {
  id: string;
  title: string;
}

export interface BackProp {
  onClick?: () => void;
}

export interface Service {
  id: string;
  title: string;
  providers?: number;
  rating: number;
  rateAmount: number;
  price: number;
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
  title?: string;
  hasBell?: boolean;
  isBack?: boolean;
}

export interface Booking {
  id: string;
  serviceImage: string;
  charge: number;
  service: string;
  status: string;
  description: string;
  date: string;
  address: string;
  provider: ProviderProps;
}

export interface ProviderProps {
  id: string;
  name: string;
  userAvatar: string;
  location: string;
  rating: number;
  rateAmount: number;
  price: number;
  service: string;
}

type ButtonVariant = 'primary' | 'outline';

export interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: any;
  icon?: ReactNode;
}

export interface ProfileActionProp {
  icon: ReactNode;
  title: string;
  text: string;
  rightElement?: ReactNode;
  path: any;
}
export interface TabItem {
  id: string;
  title: string;
  component?: ReactNode;
}
export interface TabProps {
  tabItems: TabItem[];
  setActiveMenu: Dispatch<SetStateAction<string>>;
  activeMenu: string;
}

export interface MessageProp {
  id: string;
  name: string;
  title: string;
  lastSent: string;
}

export interface Introduction {
  id: number;
  title: string;
  description: string;
}

export interface AvatarProp {
  src: string;
  size?: number;
  style?: any;
}
