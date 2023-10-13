/* eslint-disable */
import { useEffect } from 'react';
import { Filters } from './filterStyle';
import { useAuthorContext } from '../../../../hooks/authorState';
import { useGanreContext } from '../../../../hooks/ganreState';
import { useDateContext } from '../../../../hooks/dateState';

export const FilterAuthor = ({ playlist, setCurrentPlaylist, setPlaylist }) => {
  const arr = playlist.map((item) => item.author);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index).sort();

  const { authorState, setAuthorState } = useAuthorContext();
  const { ganreState } = useGanreContext();
  const { dateState } = useDateContext();

  const handleFilter = (item) => {
    if (item === 'All') {
      setAuthorState([]);
      setCurrentPlaylist(playlist);
      setPlaylist(playlist);
    } else if (authorState.includes(item)) {
      setAuthorState(authorState.filter((x) => x !== item));
    } else {
      setAuthorState([...authorState, item]);
    }
  };

  useEffect(() => {
    let arrPlaylist =
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

    if (dateState.includes('Сначала старые')) {
      const arr4 = arrPlaylist.filter((x) => x.release_date);
      arrPlaylist = arr4.sort(
        (a, b) => parseFloat(a.release_date) - parseFloat(b.release_date),
      );
    } else if (dateState.includes('Сначала новые')) {
      const arr4 = arrPlaylist.filter((x) => x.release_date);
      arrPlaylist = arr4.sort(
        (a, b) => parseFloat(b.release_date) - parseFloat(a.release_date),
      );
    }

    setCurrentPlaylist(arrPlaylist);
  }, [authorState]);

  const filterAuthorItems = arr2.map((item) => (
    <li
      key={item}
      className={
        authorState.includes(item) ? 'filters-item-choose' : 'filters-item'
      }
      onClick={() => handleFilter(item)}
    >
      {item}
    </li>
  ));

  return (
    <Filters>
      <ul className="filtersList">
        <li className="filters-item-all" onClick={() => handleFilter('All')}>
          Снять фильтры
        </li>

        {filterAuthorItems}
      </ul>
    </Filters>
  );
};
