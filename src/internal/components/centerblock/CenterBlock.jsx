/* eslint-disable */
import * as S from './centerBlockStyle';
import { Playlist } from '../Playlist/Playlist';
import { useGetPlaylistAllQuery } from '../../../services/playlistApi';
// import { refreshingToken } from '../../../api';

export const CenterBlock = ({ setPlaylist }) => {

  const {data = [], isLoading, error } = useGetPlaylistAllQuery()

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
        listName="Треки"
      />
    </S.MainCenterblock>
  );
};
