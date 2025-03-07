import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '@/widgets/common/Spinner';

import Layout from '@/widgets/common/Layout';
import { Message, RightArrowIcon } from '@/widgets/common/Icons';
import VerificationField from '@/entities/verification/ui/main/VerificationField';
import ROUTE_PATH from '@/shared/constants/routePath';
import FamilyItemList from '@/entities/family/ui/FamilyItemList';
import Switch from '@/widgets/common/Switch';
import useFamilyMembers from '@/entities/family/queries/useFamilyMembers';
import UserImage from '@/widgets/common/UserImage';

import * as S from './SettingPage.styled';

const SettingPage = () => {
  const navigate = useNavigate();
  const [isAlarm, setIsAlarm] = useState(true);
  const { data: familyMembers } = useFamilyMembers({ petId: '1' });

  return (
    <Layout>
      <S.Container>
        <S.LoggedInUserField>
          <UserImage size="XS" imageUrl={familyMembers?.manager.imageUrl} />
        </S.LoggedInUserField>
        <Suspense fallback={<Spinner />}>
          <VerificationField petId="1" />
        </Suspense>
        <S.FamilyContainer>
          <S.FamilyTitle>
            <span>월이의 가족</span>
            <RightArrowIcon
              width={20}
              height={11}
              onClick={() => navigate(ROUTE_PATH.FAMILY)}
              style={{ cursor: 'pointer' }}
            />
          </S.FamilyTitle>
          <Suspense fallback={<Spinner />}>
            <FamilyItemList family={familyMembers?.members.slice(0, 1)} />
            {familyMembers.members.slice(0, 1).length === 1 && (
              <S.MessageItem>
                <Message />
                <p id="message-body">
                  다른사람을 추가하고 싶다면 <br />
                  초대링크를 보내세요!
                </p>
              </S.MessageItem>
            )}
          </Suspense>
          <S.FamilyTitle>
            <span>월이의 가족</span>
            <S.SwitchWrapper $isAlarm={isAlarm}>
              <label htmlFor="switch" id="off">
                Off
              </label>
              <Switch
                id="switch"
                onClick={(e) => {
                  e.currentTarget.checked
                    ? setIsAlarm(true)
                    : setIsAlarm(false);
                }}
              />
              <label htmlFor="switch" id="on">
                On
              </label>
            </S.SwitchWrapper>
          </S.FamilyTitle>
        </S.FamilyContainer>
      </S.Container>
    </Layout>
  );
};

export default SettingPage;
