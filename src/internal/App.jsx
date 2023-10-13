import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppRoutes } from '../rotes';
import { isPlayingContext } from '../hooks/IsPlaying';
import { tokenContext } from '../hooks/token';
import { ganreContext } from '../hooks/ganreState';
import { dateContext } from '../hooks/dateState';
import { authorContext } from '../hooks/authorState';
import { BarPlayer } from './components/bar/BarPlayer';
import { Test } from './Test';

export const logOut = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('refresh');
  window.location.reload();
};

export const App = () => {
  const [isLoadTrack, setIsLoadTrack] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('refresh'));
  const selectTrack = useSelector((state) => state.selectTrack.selectTrack);
  const userName = useSelector((state) => state.userName.userName);
  const [playlist, setPlaylist] = useState(null);
  const [ganreState, setGanreState] = useState([]);
  const [authorState, setAuthorState] = useState([]);
  const [dateState, setDateState] = useState([]);

  return (
    <tokenContext.Provider value={{ token, setToken }}>
      <isPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
        <ganreContext.Provider value={{ ganreState, setGanreState }}>
          <authorContext.Provider value={{ authorState, setAuthorState }}>
            <dateContext.Provider value={{ dateState, setDateState }}>
              <AppRoutes
                user={userName}
                setPlaylist={setPlaylist}
                token={token}
              />
              {selectTrack != null ? (
                <BarPlayer
                  isLoadTrack={isLoadTrack}
                  setIsLoadTrack={setIsLoadTrack}
                  playlist={playlist}
                  setPlaylist={setPlaylist}
                />
              ) : null}
              <Test />
            </dateContext.Provider>
          </authorContext.Provider>
        </ganreContext.Provider>
      </isPlayingContext.Provider>
    </tokenContext.Provider>
  );
};
