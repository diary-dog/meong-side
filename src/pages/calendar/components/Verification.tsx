import { format } from 'date-fns';

import useCalendarContext from './useCalendarContext';
import UserImage from '../../../components/UserImage';
import { getVerificationTitle } from '../../../utils/getVerificationInfo';

import * as S from './Verification.styled';

const Verification = () => {
  const {
    calendar: { selectedDate },
    verifications: { dates },
  } = useCalendarContext();
  const [year, month, day] = selectedDate.date.split('-');

  const selectedDateVerification = dates.find(
    (date) => date.date === selectedDate.date
  );

  if (!selectedDateVerification) return null;

  const { verifications } = selectedDateVerification;

  return (
    <S.Container>
      <S.SelectedDate>{`${year}년 ${month}월 ${day}일`}</S.SelectedDate>
      {verifications.map((verification) => (
        <S.VerificationSection key={verification.category}>
          <S.VerificationTitle>
            <S.Round type={verification.category} />
            <span>
              {`${getVerificationTitle(verification.category)} ${verification.verificationCount}회`}
            </span>
          </S.VerificationTitle>
          {verification.verificationDetails.map((detail) => (
            <S.VerificationItem key={detail.id}>
              <span id="option">
                {detail.verificationOption ? detail.verificationOption : '인증'}
              </span>
              <span id="time">{format(detail.createdAt, 'h:m aaa')}</span>
              <UserImage size="XXS" imageUrl={detail.author.imageUrl} />
            </S.VerificationItem>
          ))}
        </S.VerificationSection>
      ))}
    </S.Container>
  );
};

export default Verification;
