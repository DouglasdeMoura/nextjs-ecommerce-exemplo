import { FC } from 'react';
import { ButtonTag } from './styled-components';
import Loading from './components/Loading/Loading';
import { IProps } from './types';

const Button: FC<IProps> = ({
  background = '#ede9fe',
  color = '#895df4',
  children,
  iconLeft,
  iconRight,
  loading = false,
  ...rest
}) => (
  <ButtonTag
    background={background}
    color={color}
    disabled={loading}
    isLoading={loading}
    data-has-left-icon={!!iconLeft}
    data-has-right-icon={!!iconRight}
    {...rest}
  >
    <span className="loading-icon">
      <Loading />
    </span>
    <span className="button-content">
      {iconLeft && <i>{iconLeft}</i>}
      <span>{children}</span>
      {iconRight && <i>{iconRight}</i>}
    </span>
  </ButtonTag>
);

export default Button;
