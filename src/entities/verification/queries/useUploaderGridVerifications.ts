import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import verificationAPI from '../api/verificationAPI';
import { SortType } from '../verification.dto';
import { verificationKey } from '@/shared/lib/query/queryKey';
import useIntersectionObserver from '@/shared/hooks/useIntersectionObserver';

const useUploaderGridVerifications = ({
  uploaderId,
  sort,
}: {
  uploaderId: string;
  sort: SortType;
}) => {
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: verificationKey.uploaderGrid(uploaderId, sort),
    queryFn: ({ pageParam }) =>
      verificationAPI.getGridVerificationsForUploader({
        uploaderId,
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
export default useUploaderGridVerifications;
