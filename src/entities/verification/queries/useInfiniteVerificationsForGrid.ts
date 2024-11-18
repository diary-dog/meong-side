import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { verificationKey } from '@/shared/lib/query/queryKey';
import useIntersectionObserver from '@/shared/hooks/useIntersectionObserver';
import { SortType } from '../verification.dto';
import verificationAPI from '../api/verificationAPI';

const useInfiniteVerificationsForGrid = (sort: SortType) => {
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: verificationKey.allGrid(sort),
    queryFn: ({ pageParam }) =>
      verificationAPI.getAllGridVerifications({
        sort,
        currentPage: pageParam,
      }),
    getNextPageParam: ({ data: { currentPage, totalPages } }) =>
      currentPage < totalPages ? currentPage + 1 : undefined,
    initialPageParam: 0,
  });

  const { targetItemRef } =
    useIntersectionObserver<HTMLDivElement>(fetchNextPage);
  const gridData = data?.pages.flatMap(({ data: page }) => page.items);

  return { data: gridData, targetItemRef, isFetchingNextPage };
};
export default useInfiniteVerificationsForGrid;
