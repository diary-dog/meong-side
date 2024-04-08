import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './Input.styled';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { isValid: boolean }
>(({ isValid, ...props }, ref) => {
  return (
    <S.Container>
      <S.InputItem ref={ref} {...props} />
      <S.ValidDoubleCheck $isValid={isValid} className="check" />
    </S.Container>
  );
});

export default Input;
