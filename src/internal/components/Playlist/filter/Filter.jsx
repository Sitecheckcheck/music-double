// /* eslint-disable */
import { useState } from 'react';
import { FilterAuthor } from './FilterAuthor';
import { FilterGenre } from './FilterGenre';
import { FilterYear } from './FilterYear';
import {
  CenterblockFilter,
  FilterButton,
  StyledFilterCounter,
} from './filterStyle';
import { useAuthorContext } from '../../../../hooks/authorState';
import { useGanreContext } from '../../../../hooks/ganreState';

export const Filter = ({
  playlist,
  setCurrentPlaylist,
  setPlaylist,
  currentPlaylist,
}) => {
  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  const { authorState } = useAuthorContext();
  const { ganreState } = useGanreContext();

  return (
    <CenterblockFilter>
      <div className="filter__title">Искать по:</div>
      <div>
        <FilterButton
          type="button"
          onClick={() => toggleVisibleFilter('Author')}
        >
          Исполнителю
          {authorState.length > 0 ? (
            <StyledFilterCounter>{authorState.length}</StyledFilterCounter>
          ) : (
            ''
          )}
        </FilterButton>
        {visibleFilter === 'Author' && (
          <FilterAuthor
            playlist={playlist}
            setCurrentPlaylist={setCurrentPlaylist}
            setPlaylist={setPlaylist}
            currentPlaylist={currentPlaylist}
          />
        )}
      </div>
      <div>
        <FilterButton type="button" onClick={() => toggleVisibleFilter('Year')}>
          году выпуска
        </FilterButton>
        {visibleFilter === 'Year' && (
          <FilterYear
            playlist={playlist}
            setCurrentPlaylist={setCurrentPlaylist}
            setPlaylist={setPlaylist}
            currentPlaylist={currentPlaylist}
          />
        )}
      </div>
      <div>
        <FilterButton
          type="button"
          onClick={() => toggleVisibleFilter('Genre')}
        >
          жанру
          {ganreState.length > 0 ? (
            <StyledFilterCounter>{ganreState.length}</StyledFilterCounter>
          ) : (
            ''
          )}
        </FilterButton>
        {visibleFilter === 'Genre' && (
          <FilterGenre
            playlist={playlist}
            setCurrentPlaylist={setCurrentPlaylist}
            setPlaylist={setPlaylist}
            currentPlaylist={currentPlaylist}
          />
        )}
      </div>
    </CenterblockFilter>
  );
};
