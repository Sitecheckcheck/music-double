/* eslint-disable */
// import tracks from '../../../../Tracks';
import { useEffect } from 'react';
import { Filters } from './filterStyle';
import { useAuthorContext } from '../../../../hooks/authorState';
import { useGanreContext } from '../../../../hooks/ganreState';
import { useDateContext } from '../../../../hooks/dateState';

export const FilterYear = ({
  playlist,
  setCurrentPlaylist,
  setPlaylist,
  currentPlaylist,
}) => {
  const { dateState, setDateState } = useDateContext();
  const { authorState } = useAuthorContext();
  const { ganreState } = useGanreContext();

  const arr3 = currentPlaylist.filter((x) => x.release_date);
  const arr4 =
    ganreState.length === 0 && authorState.length === 0
      ? playlist
      : ganreState.length === 0
      ? playlist.filter((el) => authorState.includes(el.author))
      : authorState.length === 0
      ? playlist.filter((el) => ganreState.includes(el.genre))
      : playlist.filter(
          (el) =>
            ganreState.includes(el.genre) || authorState.includes(el.author),
        );

  const handleFilter = (item) => {
    if (item === 'Default') {
      setDateState([]);
      setCurrentPlaylist(arr4);
      setPlaylist(playlist);
    } else if (item === 'Сначала старые') {
      arr3.sort(
        (a, b) => parseFloat(a.release_date) - parseFloat(b.release_date),
      );
      setCurrentPlaylist(arr3);
      setDateState([item]);
    } else {
      arr3.sort(
        (a, b) => parseFloat(b.release_date) - parseFloat(a.release_date),
      );
      setCurrentPlaylist(arr3);
      setDateState([item]);
    }
  };

  return (
    <Filters>
      <ul className="filtersList">
        <li
          className="filters-item-all"
          onClick={() => handleFilter('Default')}
        >
          По умолчанию
        </li>
        <li
          className={
            dateState.includes('Сначала старые')
              ? 'filters-item-choose'
              : 'filters-item'
          }
          onClick={() => handleFilter('Сначала старые')}
        >
          Сначала старые
        </li>
        <li
          className={
            dateState.includes('Сначала новые')
              ? 'filters-item-choose'
              : 'filters-item'
          }
          onClick={() => handleFilter('Сначала новые')}
        >
          Сначала новые
        </li>
      </ul>
    </Filters>
  );
};
