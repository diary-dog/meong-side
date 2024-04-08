import styled from 'styled-components';

import { THEME } from '../../styles/theme';

export const ButtonContainer = styled.button<{
  color: keyof typeof THEME.COLORS;
  $textColor: keyof typeof THEME.COLORS;
}>`
  width: 265px;
  height: 52px;
  padding: 13px 0;
  gap: 8px;
  border-radius: 30px;
  border: none;
  opacity: 0px;
  color: ${({ theme, $textColor }) => theme.COLORS[$textColor] || $textColor};
  background-color: ${({ theme, color }) => theme.COLORS[color] || color};
  font-size: 20px;
`;
