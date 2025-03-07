import { useNavigate } from 'react-router-dom';

import { PlusIcon } from '@/widgets/common/Icons';
import UserImage from '@/widgets/common/UserImage';
import ROUTE_PATH from '@/shared/constants/routePath';
import { UserType } from '@/shared/dto/user.dto';

import * as S from './FamilyItemList.styled';

const FamilyItemList = ({ family }: { family?: UserType[] }) => {
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
