import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

import useFamilyMembers from '../../entities/family/api/useFamilyMembers';
import UserImage from '../../shared/ui/UserImage';
import { LeftArrowIcon } from '../../shared/ui/Icons';
import FamilyItemList from '../../widgets/family/ui/FamilyItemList';
import ROUTE_PATH from '../../shared/constants/routePath';

import * as G from './SettingPage.styled';
import * as S from './FamilyListPage.styled';
import Spinner from '../../shared/ui/Spinner';

const FamilyListPage = () => {
  const navigate = useNavigate();
  const { data: familyMembers } = useFamilyMembers({ petId: '1' });

  return (
    <Suspense fallback={<Spinner />}>
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
export default FamilyListPage;
