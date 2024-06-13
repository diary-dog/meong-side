import { Button } from '../../../shared/ui';
import UserImage from '../../../shared/ui/UserImage';

import * as S from './ConfirmPet.styled';

const ConfirmPet = ({ onInCorrect }: { onInCorrect: () => void }) => {
  return (
    <S.ConTainer>
      <S.IconWrapper>
        <UserImage size="XL" />
        <h3 className="title">이 아이가 맞나요?</h3>
        <p className="description">
          만약 아니라면 메인관리자에게 <br />
          다시한번 확인해주세요!
        </p>
      </S.IconWrapper>
      <S.ButtonWrapper>
        <Button onClick={() => {}} color="P-BUTTON1">
          맞아요!
        </Button>
        <Button onClick={onInCorrect} color="INACTIVE-BUTTON">
          아니에요
        </Button>
      </S.ButtonWrapper>
    </S.ConTainer>
  );
};

export default ConfirmPet;
