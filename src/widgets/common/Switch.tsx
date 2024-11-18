import { InputHTMLAttributes } from 'react';

import * as S from './Switch.styled';

const Switch = ({
  id,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  id: string;
}) => {
  return (
    <S.SwitchWrapper>
      <input id={id} role="switch" type="checkbox" {...props} />
    </S.SwitchWrapper>
  );
};
export default Switch;
