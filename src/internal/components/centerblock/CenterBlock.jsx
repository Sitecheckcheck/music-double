// /* eslint-disable */
import * as S from './centerBlockStyle';
import { Playlist } from '../Playlist/Playlist';
import { useGetPlaylistAllQuery } from '../../../services/playlistApi';

export const CenterBlock = ({ setPlaylist }) => {

  const {data = [], isLoading, error } = useGetPlaylistAllQuery()
  
  return (
    <S.MainCenterblock>
      <Playlist
        status={isLoading ? 'loading' : 'resolved'}
        error={error}
        list={data}
        setPlaylist={setPlaylist}
        listName="Треки"
      />
    </S.MainCenterblock>
  );
};
