// /* eslint-disable */
import * as S from '../centerblock/centerBlockStyle';
import { Playlist } from '../Playlist/Playlist';
import { useGetPlaylistFavoriteQuery } from '../../../services/playlistApi';
// import { refreshingToken } from '../../../api';

export const MyTracksCenterBlock = ({ setPlaylist }) => {

  const { data = [], error, isLoading } = useGetPlaylistFavoriteQuery();

  // if (error && error.status === 401) {
  //   const refteshToken = localStorage.getItem('refresh');
  //   refreshingToken(refteshToken).then((response) => {
  //     localStorage.setItem('access', response.access);
  //   });
  // }


  return (
    <S.MainCenterblock>
      <Playlist
        status={isLoading ? 'loading' : 'resolved'}
        error={error}
        list={data}
        setPlaylist={setPlaylist}
        listName="Мои треки"
      />
    </S.MainCenterblock>
  );
};
