// /* eslint-disable */

import { useGetPlaylistSelectionQuery } from '../../../services/playlistApi';
import { Playlist } from '../Playlist/Playlist';
import * as S from '../centerblock/centerBlockStyle';

export const ListCenterBlock = ({ ListName, setPlaylist }) => {
  const {
    data = [],
    error,
    isLoading,
  } = useGetPlaylistSelectionQuery(ListName.id);

  return (
    <S.MainCenterblock>
      {error ? (
        <h1>{error.error}</h1>
      ) : (
        <Playlist
          setPlaylist={setPlaylist}
          status={isLoading ? 'loading' : 'resolved'}
          list={!isLoading && data.items ? data.items : []}
          listName={ListName.listName}
        />
      )}
    </S.MainCenterblock>
  );
};
