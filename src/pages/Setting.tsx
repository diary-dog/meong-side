import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../components';
import { Message, RightArrowIcon } from '../components/Icons';
import UserImage from '../components/common/UserImage';
import VerificationField from '../components/verification/VerificationField';
import { familyMockData, pet } from '../utils/mockData';
import ROUTE_PATH from '../router/constants';
import FamilyItemList from '../components/setting/FamilyItemList';
import Switch from '../components/common/Switch';

import * as S from './Setting.styled';

const Setting = () => {
  const navigate = useNavigate();
  const [isAlarm, setIsAlarm] = useState(true);

  return (
    <Layout>
      <S.Container>
        <S.LoggedInUserField>
          <UserImage
            size="XS"
            imageUrl="https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__"
          />
        </S.LoggedInUserField>
        <VerificationField pet={pet} />
        <S.FamilyContainer>
          <S.FamilyTitle>
            <span>월이의 가족</span>
            <RightArrowIcon
              width={20}
              hanging={11}
              onClick={() => navigate(ROUTE_PATH.FAMILY)}
            />
          </S.FamilyTitle>
          <FamilyItemList family={familyMockData.slice(0, 1)} />
          <S.MessageItem>
            <Message />
            <p id="message-body">
              다른사람을 추가하고 싶다면 <br />
              초대링크를 보내세요!
            </p>
          </S.MessageItem>
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
      <Layout.BottomBar />
    </Layout>
  );
};

export default Setting;
