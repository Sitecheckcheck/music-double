/* eslint-disable */
import { useEffect, useState } from 'react';
import { PlaylistItemEmpty } from './PlaylistItem/PlayListItemEmpty';
import { Filter } from './filter/Filter';
import * as S from '../centerblock/centerBlockStyle';
import { PlaylistItem } from './PlaylistItem/PlaylistItem';
import { useGanreContext } from '../../../hooks/ganreState';
import { useAuthorContext } from '../../../hooks/authorState';
import { useDateContext } from '../../../hooks/dateState';

export const Playlist = ({ list, status, error, setPlaylist, listName }) => {
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [search, setSearch] = useState('');

  const { ganreState } = useGanreContext();
  const { authorState } = useAuthorContext();
  const { dateState } = useDateContext();

  const filterCheck = (list) => {
    let arrPlaylist =
      ganreState.length === 0 && authorState.length === 0
        ? list
        : ganreState.length === 0
        ? list.filter((el) => authorState.includes(el.author))
        : authorState.length === 0
        ? list.filter((el) => ganreState.includes(el.genre))
        : list.filter(
            (el) =>
              ganreState.includes(el.genre) || authorState.includes(el.author),
          );

    if (dateState.includes('Сначала старые')) {
      const arr = arrPlaylist.filter((x) => x.release_date);
      arrPlaylist = arr.sort(
        (a, b) => parseFloat(a.release_date) - parseFloat(b.release_date),
      );
    } else if (dateState.includes('Сначала новые')) {
      const arr = arrPlaylist.filter((x) => x.release_date);
      arrPlaylist = arr.sort(
        (a, b) => parseFloat(b.release_date) - parseFloat(a.release_date),
      );
    }

    setCurrentPlaylist(arrPlaylist);
  };

  useEffect(() => {
    filterCheck(list);
  }, [list]);

  useEffect(() => {
    if (search !== '') {
      console.log(111);
      const searchPlaylist = currentPlaylist.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
      setCurrentPlaylist(searchPlaylist);
    } else {
      filterCheck(list);
    }
  }, [search]);

  return (
    <>
      <div className="centerblock__search search">
        <S.SearchSvg>
          <use xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-search`} />
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <h2 className="centerblock__h2">{listName}</h2>
      <Filter
        playlist={list}
        setCurrentPlaylist={setCurrentPlaylist}
        setPlaylist={setPlaylist}
        currentPlaylist={currentPlaylist}
      />

      <div className="centerblock__content">
        <S.ContentTitle>
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <S.playlistTitleSvg alt="time">
              <use xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-watch`} />
            </S.playlistTitleSvg>
          </div>
        </S.ContentTitle>

        {status === 'loading' && (
          <S.ContentPlaylist>
            <PlaylistItemEmpty />
          </S.ContentPlaylist>
        )}

        {status === 'rejected' && (
          <S.ContentPlaylist>
            <h1>{error}</h1>
          </S.ContentPlaylist>
        )}

        {status === 'resolved' && (
          <S.ContentPlaylist>
            {currentPlaylist.map((item) => (
              <PlaylistItem
                list={currentPlaylist}
                setPlaylist={setPlaylist}
                item={item}
                key={item.id}
                track={item.name}
                artist={item.author}
                album={item.album}
                time={`${Math.floor(item.duration_in_seconds / 60)}:${
                  item.duration_in_seconds % 60 < 10
                    ? `0${item.duration_in_seconds % 60}`
                    : item.duration_in_seconds % 60
                }`}
                listName={listName}
              />
            ))}
          </S.ContentPlaylist>
        )}
      </div>
    </>
  );
};
