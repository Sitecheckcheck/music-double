// /* eslint-disable */
import * as S from '../centerblock/centerBlockStyle';
import { Playlist } from '../Playlist/Playlist';
import { useGetPlaylistFavoriteQuery } from '../../../services/playlistApi';

export const MyTracksCenterBlock = ({ setPlaylist }) => {
  const { data = [], error, isLoading } = useGetPlaylistFavoriteQuery();

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
