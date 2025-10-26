import { Dispatch, ReactNode, SetStateAction } from 'react';

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
  title: string;
  hasBell?: boolean;
}

export interface Booking {
  id: string;
  serviceImage: ReactNode;
  charge: number;
  service: string;
  location?: string;
  status: string;
}

export interface ProviderProps {
  id: string;
  name: string;
  userAvatar: ReactNode;
  location: string;
  rating: number;
  rateAmount: number;
  price: number;
  service?: string;
}

export interface BookingDetails extends Booking {
  description: string;
  date: string;
  address: string;
  provider: ProviderProps;
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
}
export interface TabItem {
  id: string;
  title: string;
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
