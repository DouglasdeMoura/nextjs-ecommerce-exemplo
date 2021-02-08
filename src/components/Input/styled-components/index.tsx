import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IInputTag extends InputHTMLAttributes<HTMLInputElement> {
  disabled: boolean;
}

export const InputTag = styled.input<IInputTag>`
  border: 3px solid #D1D5DB;
  outline: none;
  border-radius: 8px;
  padding: 5px 10px;

  &:focus {
    border-color: #9CA3AF;
  }

  &:disabled,
  &[disabled] {
    background: #E5E7EB;
    cursor: not-allowed;
  }
`;

export const InputContainer = styled.div`
  label {
    font-weight: bold;
    padding-bottom: 8px;
    display: block;
    font-size: 14px;
    color: #374151;
  }

  .icon-left,
  .icon-right {
    padding: 0 8px;
  }
`;

export const Error = styled.div`
  color: #991B1B;
  margin: 0.3em 0 0.3em 0;
  font-size: 14px;
`;
