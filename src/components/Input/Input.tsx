import { FC } from 'react';
import { InputContainer, InputTag, Error } from './styled-components';
import { IProps } from './types';

const Input: FC<IProps> = ({
  disabled = false,
  iconLeft,
  iconRight,
  label,
  error,
  ...rest
}) => (
  <InputContainer>
    <label htmlFor={label}>{label}</label>
    <div
      className="input-block"
    >
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      <InputTag
        id={label}
        disabled={disabled}
        {...rest}
      />
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </div>
    {error && <Error>{error}</Error>}
  </InputContainer>
);

export default Input;
