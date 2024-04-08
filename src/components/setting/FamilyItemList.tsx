import { useNavigate } from 'react-router-dom';

import { PlusIcon } from '../Icons';
import UserImage from '../common/UserImage';
import ROUTE_PATH from '../../router/constants';
import { User } from '../../utils/mockData';

import * as S from './FamilyItemList.styled';

const FamilyItemList = ({ family }: { family: User[] }) => {
  const navigate = useNavigate();
  return (
    <S.FamilyWrapper>
      {family.map((user) => (
        <S.FamilyItem key={user.userId}>
          <UserImage
            size="SM"
            imageUrl="https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__"
          />
          <span>둘째딸</span>
        </S.FamilyItem>
      ))}
      <button
        type="button"
        onClick={() => navigate(ROUTE_PATH.SENDING_INVITATION)}
      >
        <PlusIcon />
      </button>
    </S.FamilyWrapper>
  );
};

export default FamilyItemList;
