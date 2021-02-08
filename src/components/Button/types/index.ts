import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  background?: string;
  color?: string;
}
