import { Layout } from '../components';
import { Message, PlusIcon, RightArrowIcon } from '../components/Icons';
import UserImage from '../components/common/UserImage';
import VerificationField from '../components/verification/VerificationField';
import { pet } from '../utils/mockData';

import * as S from './Setting.styled';

const Setting = () => {
  return (
    <Layout>
      <S.Container>
        <VerificationField pet={pet} />
        <S.FamilyContainer>
          <S.FamilyTitle>
            <span>월이의 가족</span>
            <RightArrowIcon width={20} hanging={11} />
          </S.FamilyTitle>
          <S.FamilyWrapper>
            <S.FamilyItem>
              <UserImage
                size="SM"
                imageUrl="https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__"
              />
              <span>둘째딸</span>
            </S.FamilyItem>
            <button type="button">
              <PlusIcon />
            </button>
          </S.FamilyWrapper>
          <S.MessageItem>
            <Message />
            <p id="message-body">
              다른사람을 추가하고 싶다면 <br />
              초대링크를 보내세요!
            </p>
          </S.MessageItem>
        </S.FamilyContainer>
      </S.Container>
      <Layout.BottomBar />
    </Layout>
  );
};

export default Setting;
