import { useNavigate } from 'react-router-dom';

import { PlusIcon } from '../../../components/Icons';
import UserImage from '../../../components/UserImage';
import ROUTE_PATH from '../../../router/constants';
import { User } from '../../../types/user';

import * as S from './FamilyItemList.styled';

const FamilyItemList = ({ family }: { family?: User[] }) => {
  const navigate = useNavigate();
  return (
    <S.FamilyWrapper>
      {family?.map((user) => (
        <S.FamilyItem key={user.id}>
          <UserImage size="SM" imageUrl={user.imageUrl} />
          <span>{user.name}</span>
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
