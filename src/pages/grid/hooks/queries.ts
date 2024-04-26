import {
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { verificationKey } from '../../../utils/query/queryKey';
import verificationAPI from '../../../api/verificationAPI';
import useIntersectionObserver from '../../calendar/useIntersectionObserver';
import { SortType } from '../../../types/verification';

export const useInfiniteVerificationsForGrid = (sort: SortType) => {
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: verificationKey.allGrid(sort),
    queryFn: ({ pageParam }) =>
      verificationAPI.getAllGridVerifications({
        sort,
        currentPage: pageParam,
      }),
    getNextPageParam: ({ currentPage, totalPages }) =>
      currentPage < totalPages ? currentPage + 1 : undefined,
    initialPageParam: 0,
  });

  const { targetItemRef } =
    useIntersectionObserver<HTMLDivElement>(fetchNextPage);
  const gridData = data?.pages.flatMap((page) => page.items);

  return { data: gridData, targetItemRef, isFetchingNextPage };
};

export const useGridVerificationsForUploader = () => {
  const { data } = useSuspenseQuery({
    queryKey: verificationKey.gridByUploader(),
    queryFn: () => verificationAPI.getVerificationByUploaderForGrid(),
  });
  return data;
};

export const useUploaderGridVerifications = ({
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
    getNextPageParam: ({ currentPage, totalPages }) =>
      currentPage < totalPages ? currentPage + 1 : undefined,
    initialPageParam: 0,
  });

  const { targetItemRef } =
    useIntersectionObserver<HTMLDivElement>(fetchNextPage);
  const gridData = data?.pages.flatMap((page) => page.items);

  return { data: gridData, targetItemRef, isFetchingNextPage };
};
