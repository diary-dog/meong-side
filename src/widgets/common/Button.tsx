import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { THEME } from '../../shared/styles/theme';

import * as S from './Button.styled';

const Button = ({
  color = 'INACTIVE-BUTTON',
  textColor = 'FONT-COLOR-A',
  type = 'button',
  children,
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<Element> & {
    color: keyof typeof THEME.COLORS;
    textColor?: keyof typeof THEME.COLORS;
  }
>) => {
  return (
    <S.ButtonContainer
      $textColor={textColor}
      color={color}
      type={type}
      {...props}
    >
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
