import styled, { keyframes } from 'styled-components';
import { lighten, darken } from 'polished';

interface IButtonTag {
  background: string;
  color: string;
  isLoading: boolean;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonTag = styled.button<IButtonTag>`
  font-weight: bold;
  padding: 8px 24px;
  border: 3px solid ${(props) => props.background};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 24px;
  outline: 0;
  position: relative;
  transition: all 0.2s;

  &[data-has-left-icon="true"] {
    padding-left: 16px;
  }

  &[data-has-right-icon="true"] {
    padding-right: 16px;
  }

  .button-content {
    visibility: ${(props) => (props.isLoading ? 'hidden' : '')};
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .loading-icon {
    position: absolute;
    display: ${(props) => (props.isLoading ? 'block' : 'none')};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  svg {
    width: 18px;
    height: 18px;
    animation: ${spin} 1s linear infinite;
  }

  &:hover {
    background: ${(props) => darken(0.05, props.background)};
    border-color: ${(props) => darken(0.05, props.background)};
  }

  &:active {
    background: ${(props) => lighten(0.05, props.background)};
    border-color: ${(props) => lighten(0.05, props.background)};
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.25);
  }

  &:disabled,
  &[disabled] {
    opacity: 0.8;
    cursor: wait;
  }

  &:disabled:hover,
  &[disabled]:hover {
    background: ${(props) => props.background};
    border-color: ${(props) => props.background};
  }
`;
