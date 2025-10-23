export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
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
