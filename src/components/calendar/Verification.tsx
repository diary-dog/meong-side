import styled from 'styled-components';
import useCalendarContext from './useCalendarContext';
import UserImage from '../common/UserImage';
import { VERIFICATION } from '../../utils/constants';
import { getVerificationTypeColor } from '../../utils/getVerificationTypeColor';

const imageUrl =
  'https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Blls~PN-jxbzXt6LD7gwoBcuFTXCIL7hZAXfDtng5UtHUM2ryM~RQyOHD64KaWyiFWM3M36Y5P9BYtU59PHILEsRaTLvETtQYzYSIKf0dRmWpggQ-hlpKHafxFH-YdMrSk-iEKUTuPBpdFNVhGYFpfOx73KgXlPCnsVoWE2tnzRAZBrd3CoutqXa4JmqtVvaSlkKi5JfxJP0nY3ar-fdqBy~8WmdmsCZLYr9IBrzVB4L5yxnACmUBRqWoeoEge67pYbcWOfIUHBZ7tXW2iYLdG2F0GNBjxoXDKw8oo8Nfgt-xIt6cciuRWKhR~6Df2eYDePyCWcQpzKRGLfrdaWlmQ__';

const Verification = () => {
  const { selectedDate } = useCalendarContext();
  const [year, month, day] = selectedDate.date.split('-');

  return (
    <Container>
      <SelectedDate>{`${year}년 ${month}월 ${day}일`}</SelectedDate>
      <VerificationSection>
        <VerificationTitle>
          <Round type={VERIFICATION.WALK} />
          <div>산책 2회</div>
        </VerificationTitle>
        <VerificationItem>
          <span>1시간 10분</span>
          <span id="time">08:30 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </VerificationItem>
        <VerificationItem>
          <span>30분</span>
          <span id="time">08:31 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </VerificationItem>
      </VerificationSection>
      <VerificationSection>
        <VerificationTitle>
          <Round type={VERIFICATION.MEAL} />
          <div>식사 2회</div>
        </VerificationTitle>
        <VerificationItem>
          <span>반만 먹었어요!</span>
          <span id="time">08:00 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </VerificationItem>
        <VerificationItem>
          <span>다 먹었어요!</span>
          <span id="time">08:31 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </VerificationItem>
      </VerificationSection>
      <VerificationSection>
        <VerificationTitle>
          <Round type={VERIFICATION.TREAT} />
          <div>간식 2회</div>
        </VerificationTitle>
        <VerificationItem>
          <span>강아지껌</span>
          <span id="time">08:12 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </VerificationItem>
        <VerificationItem>
          <span>건조 간식</span>
          <span id="time">08:31 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </VerificationItem>
      </VerificationSection>
      <VerificationSection>
        <VerificationTitle>
          <Round type={VERIFICATION.BATH} />
          <div>목욕 1회</div>
        </VerificationTitle>
        <VerificationItem>
          <span>발만 닦았어요!</span>
          <span id="time">08:30 am</span>
          <UserImage size="XXS" imageUrl={imageUrl} />
        </VerificationItem>
      </VerificationSection>
    </Container>
  );
};

export default Verification;

const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: white;
  padding: 18px 30px;
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const SelectedDate = styled.h3`
  font-size: 20px;
  line-height: 25.6px;
  text-align: left;
`;

const Round = styled.div<{ type: string }>`
  width: 11px;
  height: 11px;
  background-color: ${({ type }) => getVerificationTypeColor(type)};
  border-radius: 100%;
`;
const VerificationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const VerificationTitle = styled.div`
  display: flex;
  gap: 5px;
  font-size: ${({ theme }) => theme.FONT.SM};
`;
const VerificationItem = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 1fr;
  gap: 10px;
  align-items: center;
  span {
    white-space: nowrap;
  }
  #time {
    margin-left: auto;
  }
`;
