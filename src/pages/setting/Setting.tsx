import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../components';
import { Message, RightArrowIcon } from '../../components/Icons';
import UserImage from '../../components/UserImage';
import VerificationField from '../Home/components/VerificationField';
import ROUTE_PATH from '../../router/constants';
import FamilyItemList from './components/FamilyItemList';
import Switch from '../../components/Switch';
import { useFamilyMembers } from './hooks/queries';
import { useVerificationCount } from '../Home/hooks/queries';

import * as S from './Setting.styled';

const Setting = () => {
  const navigate = useNavigate();
  const [isAlarm, setIsAlarm] = useState(true);
  const { data: familyMembers } = useFamilyMembers({ petId: '1' });
  const { data: verificationCount } = useVerificationCount({ petId: '1' });

  return (
    <Layout>
      <S.Container>
        <S.LoggedInUserField>
          <UserImage size="XS" imageUrl={familyMembers?.manager.imageUrl} />
        </S.LoggedInUserField>
        <VerificationField pet={verificationCount} />
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
          <Suspense fallback={<div>로딩 중</div>}>
            <FamilyItemList family={familyMembers?.members} />
            {familyMembers?.members.length === 1 && (
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

export default Setting;
