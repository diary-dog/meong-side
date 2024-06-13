import UserImage from '../../../shared/ui/UserImage';
import { Deco1, Deco2 } from '../../../shared/ui/Icons';
import { Button } from '../../../shared/ui';

import * as G from './settingGlobal.styled';
import * as S from './SuccessInvitation.styled';

const SuccessInvitation = ({ onNext }: { onNext: () => void }) => {
  const imageUrl = '';

  return (
    <S.Container>
      <G.HeaderBar>
        <div></div>
        <h3>공유링크보내기</h3>
        <div></div>
      </G.HeaderBar>
      <S.ImageWrapper>
        <Deco1 id="deco1" />
        <UserImage size="XL" imageUrl={imageUrl} />
        <Deco2 id="deco2" />
      </S.ImageWrapper>
      <S.SuccessMessage>
        <S.SuccussTitle>성공!</S.SuccussTitle>
        <p>
          초대받은 분이 링크를 누르면 <br />
          구성원에 추가될거에요!
        </p>
        <Button onClick={onNext} color={'INACTIVE-BUTTON'}>
          닫기
        </Button>
      </S.SuccessMessage>
    </S.Container>
  );
};
export default SuccessInvitation;
