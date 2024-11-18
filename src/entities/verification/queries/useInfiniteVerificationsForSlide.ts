import verificationAPI from '../api/verificationAPI';
import { verificationKey } from '@/shared/lib/query/queryKey';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import useIntersectionObserver from '@/shared/hooks/useIntersectionObserver';

const useInfiniteVerificationsForSlide = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: verificationKey.slide(),
    queryFn: ({ pageParam }) =>
      verificationAPI.getVerificationForSlide({ currentPage: pageParam }),
    getNextPageParam: ({ data: { currentPage, totalPages } }) =>
      currentPage < totalPages ? currentPage + 1 : undefined,
    initialPageParam: 0,
  });

  const { targetItemRef } =
    useIntersectionObserver<HTMLDivElement>(fetchNextPage);
  const slideData = data?.pages.flatMap(({ data: page }) => page.items);

  return { data: slideData, targetItemRef, isFetchingNextPage };
};

export default useInfiniteVerificationsForSlide;
