import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { PlusIcon } from '../Icons';
import UserImage from '../common/UserImage';
import ROUTE_PATH from '../../router/constants';
import { User } from '../../utils/mockData';

const FamilyItemList = ({ family }: { family: User[] }) => {
  const navigate = useNavigate();
  return (
    <FamilyWrapper>
      {family.map((user) => (
        <FamilyItem key={user.userId}>
          <UserImage
            size="SM"
            imageUrl="https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__"
          />
          <span>둘째딸</span>
        </FamilyItem>
      ))}
      <button
        type="button"
        onClick={() => navigate(ROUTE_PATH.SENDING_INVITATION)}
      >
        <PlusIcon />
      </button>
    </FamilyWrapper>
  );
};

export default FamilyItemList;

export const FamilyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  position: relative;
`;

export const FamilyTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.FONT.LG};
  line-height: 25.6px;
`;

export const FamilyWrapper = styled.div`
  display: flex;
  gap: 19px;
  align-items: flex-start;
`;

export const FamilyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: ${({ theme }) => theme.FONT.XS};
`;
