import { IValidation } from '../hooks/useValue';

const notEmpty = (value: string, errorMessage: string): IValidation => {
  let isValid = true;

  if (value === '') isValid = false;

  return [isValid, errorMessage];
};

export default notEmpty;
