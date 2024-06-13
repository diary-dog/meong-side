import QueryString from 'qs';
import { useNavigate } from 'react-router-dom';

import { SortType } from '../../../shared/types/verification';
import Switch from '../../../shared/ui/Switch';

import * as S from './SortButton.styled';

const SortButton = ({ type }: { type: SortType }) => {
  const navigate = useNavigate();
  const updateQueryParams = ({
    newQuery,
    newQueryKey,
  }: {
    newQuery: string;
    newQueryKey: string;
  }) => {
    const currentQueryParams = QueryString.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });
    const newQueryParams = {
      ...currentQueryParams,
      [newQueryKey]: newQuery,
    };
    const queryString = QueryString.stringify(newQueryParams, {
      addQueryPrefix: true,
    });
    navigate(queryString);
  };
  return (
    <S.SelectSortType $sortType={type}>
      <label htmlFor="switch" id="ascending">
        오름차순
      </label>
      <Switch
        id="switch"
        onClick={(e) => {
          e.currentTarget.checked
            ? updateQueryParams({
                newQueryKey: 'sortType',
                newQuery: 'descending',
              })
            : updateQueryParams({
                newQueryKey: 'sortType',
                newQuery: 'ascending',
              });
        }}
      />
      <label htmlFor="switch" id="descending">
        내림차순
      </label>
    </S.SelectSortType>
  );
};
export default SortButton;
