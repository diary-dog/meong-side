import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { verificationKey } from '../../../shared/lib/query/queryKey';
import verificationAPI from './verificationAPI';
import useIntersectionObserver from '../../../shared/hooks/useIntersectionObserver';

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
