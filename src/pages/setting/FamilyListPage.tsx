import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

import useFamilyMembers from '@/entities/family/queries/useFamilyMembers';
import UserImage from '@/widgets/common/UserImage';
import { LeftArrowIcon } from '@/widgets/common/Icons';
import FamilyItemList from '@/entities/family/ui/FamilyItemList';
import ROUTE_PATH from '@/shared/constants/routePath';

import * as G from './SettingPage.styled';
import * as S from './FamilyListPage.styled';
import Spinner from '@/widgets/common/Spinner';

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
