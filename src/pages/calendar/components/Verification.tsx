import useCalendarContext from './useCalendarContext';
import UserImage from '../../../components/UserImage';
import { VERIFICATION } from '../../../constants/verifications';

import * as S from './Verification.styled';

const imageUrl =
  'https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Blls~PN-jxbzXt6LD7gwoBcuFTXCIL7hZAXfDtng5UtHUM2ryM~RQyOHD64KaWyiFWM3M36Y5P9BYtU59PHILEsRaTLvETtQYzYSIKf0dRmWpggQ-hlpKHafxFH-YdMrSk-iEKUTuPBpdFNVhGYFpfOx73KgXlPCnsVoWE2tnzRAZBrd3CoutqXa4JmqtVvaSlkKi5JfxJP0nY3ar-fdqBy~8WmdmsCZLYr9IBrzVB4L5yxnACmUBRqWoeoEge67pYbcWOfIUHBZ7tXW2iYLdG2F0GNBjxoXDKw8oo8Nfgt-xIt6cciuRWKhR~6Df2eYDePyCWcQpzKRGLfrdaWlmQ__';

const Verification = () => {
  const { selectedDate } = useCalendarContext();
  const [year, month, day] = selectedDate.date.split('-');

  return (
    <S.Container>
      <S.SelectedDate>{`${year}년 ${month}월 ${day}일`}</S.SelectedDate>
      <S.VerificationSection>
        <S.VerificationTitle>
          <S.Round type={VERIFICATION.WALK} />
          <div>산책 2회</div>
        </S.VerificationTitle>
        <S.VerificationItem>
          <span>1시간 10분</span>
          <span id="time">08:30 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </S.VerificationItem>
        <S.VerificationItem>
          <span>30분</span>
          <span id="time">08:31 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </S.VerificationItem>
      </S.VerificationSection>
      <S.VerificationSection>
        <S.VerificationTitle>
          <S.Round type={VERIFICATION.MEAL} />
          <div>식사 2회</div>
        </S.VerificationTitle>
        <S.VerificationItem>
          <span>반만 먹었어요!</span>
          <span id="time">08:00 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </S.VerificationItem>
        <S.VerificationItem>
          <span>다 먹었어요!</span>
          <span id="time">08:31 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </S.VerificationItem>
      </S.VerificationSection>
      <S.VerificationSection>
        <S.VerificationTitle>
          <S.Round type={VERIFICATION.TREATS} />
          <div>간식 2회</div>
        </S.VerificationTitle>
        <S.VerificationItem>
          <span>강아지껌</span>
          <span id="time">08:12 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </S.VerificationItem>
        <S.VerificationItem>
          <span>건조 간식</span>
          <span id="time">08:31 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </S.VerificationItem>
      </S.VerificationSection>
      <S.VerificationSection>
        <S.VerificationTitle>
          <S.Round type={VERIFICATION.BATH} />
          <div>목욕 1회</div>
        </S.VerificationTitle>
        <S.VerificationItem>
          <span>발만 닦았어요!</span>
          <span id="time">08:30 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </S.VerificationItem>
      </S.VerificationSection>
    </S.Container>
  );
};

export default Verification;
