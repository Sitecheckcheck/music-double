// /* eslint-disable */
import { useSelector } from 'react-redux';
import * as S from '../centerblock/centerBlockStyle';
import { Playlist } from '../Playlist/Playlist';

export const MyTracksCenterBlock = ({ setPlaylist }) => {
  const { favoritePlaylist, status, error } = useSelector(
    (state) => state.favoritePlaylist,
  );

  return (
    <S.MainCenterblock>
      <Playlist
        status={status}
        error={error}
        list={favoritePlaylist}
        setPlaylist={setPlaylist}
        listName="Мои треки"
      />
    </S.MainCenterblock>
  );
};
