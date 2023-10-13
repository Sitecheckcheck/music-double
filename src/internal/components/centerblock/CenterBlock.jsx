// /* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as S from './centerBlockStyle';
import { Playlist } from '../Playlist/Playlist';
import { fetchPlaylist } from '../../../store/slicePlaylist';

export const CenterBlock = ({ setPlaylist }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylist());
  }, [dispatch]);

  const { playlist, status, error } = useSelector((state) => state.playlist);
  
  return (
    <S.MainCenterblock>
      <Playlist
        status={status}
        error={error}
        list={playlist}
        setPlaylist={setPlaylist}
        listName="Треки"
      />
    </S.MainCenterblock>
  );
};
