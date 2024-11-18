import styled from 'styled-components';

import Spinner from '@/widgets/common/Spinner';
import useInfiniteVerificationsForSlide from '@/entities/verification/queries/useInfiniteVerificationsForSlide';
import DetailVerificationItem from '@/entities/verification/ui/detail/DetailVerificationItem';

const Feed = () => {
  const { data, targetItemRef, isFetchingNextPage } =
    useInfiniteVerificationsForSlide();

  return (
    <Container>
      {data.map((verification) => (
        <DetailVerificationItem
          key={verification.id}
          verification={verification}
        />
      ))}
      <div ref={targetItemRef}></div>
      {isFetchingNextPage && <Spinner size={30} />}
    </Container>
  );
};

export default Feed;

export const Container = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: #f9f5f5;
`;
