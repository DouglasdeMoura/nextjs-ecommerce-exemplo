import { InputHTMLAttributes, ReactNode } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label: string;
  error?: string;
}
