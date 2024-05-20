import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

import { useFamilyMembers } from './hooks/queries';
import UserImage from '../../components/UserImage';
import { LeftArrowIcon } from '../../components/Icons';
import FamilyItemList from './components/FamilyItemList';
import ROUTE_PATH from '../../router/constants';

import * as G from './Setting.styled';
import * as S from './FamilyList.styled';

const FamilyList = () => {
  const navigate = useNavigate();
  const { data: familyMembers } = useFamilyMembers({ petId: '1' });

  return (
    <Suspense fallback={<div>로딩 중</div>}>
      <S.LoggedInUserField>
        <LeftArrowIcon
          onClick={() => navigate(ROUTE_PATH.SETTING)}
          style={{ cursor: 'pointer' }}
        />
        <UserImage size="XS" imageUrl={familyMembers.manager.imageUrl} />
      </S.LoggedInUserField>
      <S.FamilyWrapper>
        <G.FamilyTitle>
          <span>월이의 가족</span>
        </G.FamilyTitle>
        <FamilyItemList family={familyMembers.members} />
      </S.FamilyWrapper>
    </Suspense>
  );
};
export default FamilyList;
