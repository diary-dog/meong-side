import { useNavigate } from 'react-router-dom';

import UserImage from '../../components/UserImage';
import { LeftArrowIcon } from '../../components/Icons';
import FamilyItemList from './components/FamilyItemList';
import ROUTE_PATH from '../../router/constants';
import { familyMockData } from '../../utils/mockData';

import * as G from './Setting.styled';
import * as S from './FamilyList.styled';

const userImageUrl =
  'https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__';

const FamilyList = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.LoggedInUserField>
        <LeftArrowIcon onClick={() => navigate(ROUTE_PATH.SETTING)} />
        <UserImage size="XS" imageUrl={userImageUrl} />
      </S.LoggedInUserField>
      <S.FamilyWrapper>
        <G.FamilyTitle>
          <span>월이의 가족</span>
        </G.FamilyTitle>
        <FamilyItemList family={familyMockData.slice(0, 1)} />
      </S.FamilyWrapper>
    </>
  );
};
export default FamilyList;
