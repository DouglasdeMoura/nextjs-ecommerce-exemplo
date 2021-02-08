/* eslint-disable no-unused-vars */
import { ChangeEvent, useState } from 'react';

export type IValidation = [boolean, string];
export type IValidate = (value: string, errorMessage: string) => IValidation;
export type IUseValue = [string, (event: ChangeEvent<HTMLInputElement>) => void, IValidation];

const useValue = (initialValue = '', validate: IValidate, errorMessage: string): IUseValue => {
  const [value, setValue] = useState(initialValue);
  const [validation, setValidation] = useState<IValidation>([true, '']);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValidation(validate(event.currentTarget.value, errorMessage));
    setValue(event.currentTarget.value);
  };

  return [value, handleOnChange, validation];
};

export default useValue;
