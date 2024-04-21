import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { verificationKey } from '../../../utils/query/queryKey';
import verificationAPI from '../../../api/verificationAPI';
import useIntersectionObserver from '../../calendar/useIntersectionObserver';

const useInfiniteVerificationsForSlide = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: verificationKey.slide(),
    queryFn: ({ pageParam }) =>
      verificationAPI.getVerificationForSlide({ currentPage: pageParam }),
    getNextPageParam: ({ currentPage, totalPages }) =>
      currentPage < totalPages ? currentPage + 1 : undefined,
    initialPageParam: 0,
  });

  const { targetItemRef } =
    useIntersectionObserver<HTMLDivElement>(fetchNextPage);
  const slideData = data?.pages
    .reverse()
    .flatMap((page) => page.items)
    .reverse();

  return { data: slideData, targetItemRef, isFetchingNextPage };
};

export default useInfiniteVerificationsForSlide;
