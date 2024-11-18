import { InvitationIcon, RegisterPetIcon } from '@/widgets/common/Icons';

import * as S from './SelectPet.styled';

const SelectPet = ({
  onInvitationLink,
  onResister,
}: {
  onInvitationLink: () => void;
  onResister: () => void;
}) => {
  return (
    <S.Container>
      <S.Title>
        둘째딸 님,
        <br />
        마지막 단계에요!
      </S.Title>
      <S.ButtonItem onClick={onResister} $selectType="register">
        <>
          <RegisterPetIcon />
          <h3>강아지를 등록할게요</h3>
        </>
        <p>
          본인이 메인관리자라면
          <br />
          강아지를 등록해주세요
        </p>
      </S.ButtonItem>
      <S.ButtonItem onClick={onInvitationLink} $selectType="invitation">
        <>
          <InvitationIcon />
          <h3>초대링크가 있어요</h3>
        </>
        <p>
          이미 메인관리자가 있다면
          <br />
          메인관리자에게 초대링크를
          <br />
          받아주세요
        </p>
      </S.ButtonItem>
    </S.Container>
  );
};

export default SelectPet;
