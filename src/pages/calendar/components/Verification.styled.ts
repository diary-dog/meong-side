import styled from 'styled-components';

import { getVerificationTypeColor } from '../../../utils/getVerificationTypeColor';

export const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: white;
  padding: 18px 30px;
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-top: 12px;
`;

export const SelectedDate = styled.h3`
  font-size: 20px;
  line-height: 25.6px;
  text-align: left;
`;

export const Round = styled.div<{ type: string }>`
  width: 11px;
  height: 11px;
  background-color: ${({ type }) => getVerificationTypeColor(type)};
  border-radius: 100%;
`;
export const VerificationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const VerificationTitle = styled.div`
  display: flex;
  gap: 5px;
  font-size: ${({ theme }) => theme.FONT.SM};
`;
export const VerificationItem = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 1fr;
  gap: 10px;
  align-items: center;
  span {
    white-space: nowrap;
  }
  #time {
    margin-left: auto;
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-WB']};
    font-size: ${({ theme }) => theme.FONT.XS};
  }
`;
