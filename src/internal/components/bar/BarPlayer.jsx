// /* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './barStyle';
import { ProgressBar } from './ProgressBar';
import { useIsPlayingContext } from '../../../hooks/IsPlaying';
import { selectTrackFunction } from '../../../store/sliceSelectTrack';
import { useAddFavoriteMutation, useDeleteFavoriteMutation } from '../../../services/playlistApi';

export const BarPlayer = ({
  isLoadTrack,
  setIsLoadTrack,
  playlist,
  setPlaylist,
}) => {
  const [loop, setLoop] = useState(false);
  const [shaffle, setShaffle] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [data, setData] = useState(0);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);
  const isPlayingContext = useIsPlayingContext();
  const { isPlaying } = isPlayingContext;
  const { setIsPlaying } = isPlayingContext;
  const selectTrack = useSelector((state) => state.selectTrack.selectTrack);
  const dispatch = useDispatch();
  const [firstPlaylist] = useState(playlist);
  const userName = useSelector((state) => state.userName.userName);
  const [addFavorite] = useAddFavoriteMutation()
  const [deleteFavorite] = useDeleteFavoriteMutation()

  const stared = selectTrack.stared_user
    ? selectTrack.stared_user.find((element) => element.email === userName)
    : true;

  const [isLike, setIsLike] = useState(stared);

  useEffect(() => {
    setIsLike(stared);
  }, [stared]);

  const handleLike = async () => {
    const accessToken = localStorage.getItem('access');
    if (isLike) {
      await deleteFavorite(selectTrack.id, accessToken);
      setIsLike(null);
    } else {
      await addFavorite(selectTrack.id, accessToken);
      setIsLike(true);
    }
  };

  function strPadLeft(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  const secondsToTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const finalTime = `${strPadLeft(minutes, '0', 2)}:${strPadLeft(
      seconds,
      '0',
      2,
    )}`;
    return finalTime;
  };

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.play().then(() => {
      audioRef.current.pause();
      setIsPlaying(false);
    });
  };

  const handlePrev = () => {
    audioRef.current.play().then(() => {
      if (playlist.indexOf(selectTrack) !== 0) {
        if (currentTime < 5) {
          const prevTrack = playlist[playlist.indexOf(selectTrack) - 1];
          dispatch(selectTrackFunction(prevTrack));
        } else {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      } else {
        setIsLoadTrack(false);
      }
    });
  };

  const handleNext = () => {
    setIsLoadTrack(true);

    audioRef.current.play().then(() => {
      if (playlist.indexOf(selectTrack) < playlist.length - 1) {
        const nextTrack = playlist[playlist.indexOf(selectTrack) + 1];
        dispatch(selectTrackFunction(nextTrack));
        setIsLoadTrack(false);
      } else {
        // dispatch(selectTrackFunction(playlist[0]));
        setIsLoadTrack(false);
      }
    });
  };

  const handleShuffle = () => {
    if (!shaffle) {
      setShaffle(!shaffle);
      const shafflePlaylist = [...playlist];
      shafflePlaylist.sort(() => Math.random() - 0.5);
      setPlaylist(shafflePlaylist);
    } else {
      setPlaylist(firstPlaylist);
      setShaffle(!shaffle);
    }
  };

  const handleLoop = () => {
    setLoop(!loop);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    audioRef.current.currentTime = data;
  }, [data]);

  useEffect(() => {
    const ref = audioRef.current;
    const handleTimeUpdateEvent = () => {
      if (ref.currentTime && ref.duration) {
        setCurrentTime(ref.currentTime);
        setDuration(ref.duration);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    };

    ref.addEventListener('timeupdate', handleTimeUpdateEvent);

    return () => {
      ref.removeEventListener('timeupdate', handleTimeUpdateEvent);
    };
  }, []);

  useEffect(() => {
    handleStart();
    audioRef.current.play().then(() => {
      setIsLoadTrack(false);
    });
  }, [selectTrack]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    if (audioRef.current.currentTime === audioRef.current.duration) {
      handleNext();
    }
  });

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <>
      <S.Bar>
        <audio
          controls
          ref={audioRef}
          src={selectTrack?.track_file}
          style={{ marginTop: 20 }}
          autoPlay
          onLoadedMetadata={onLoadedMetadata}
          loop={loop}
        >
          <track kind="captions" />
        </audio>
      </S.Bar>

      <S.Bar>
        <div className="bar__content">
          <p className="time-duration">
            {`${secondsToTime(Math.floor(currentTime))} / ${secondsToTime(
              Math.floor(duration),
            )}`}
          </p>
          <ProgressBar
            selectTrack={selectTrack}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            setData={setData}
            duration={duration}
          />
          <div className="bar__player-block">
            <S.BarPlayer>
              <div className="player__controls">
                <S.PlayerBtnPrev onClick={handlePrev}>
                  <svg className="player__btn-prev-svg" alt="prev">
                    <use
                      xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-prev`}
                    />
                  </svg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={togglePlay}>
                  <svg className="player__btn-play-svg" alt="play">
                    <use
                      xlinkHref={
                        isPlaying
                          ? `${'/music/img/icon/sprite.svg'}#icon-pause`
                          : `${'/music/img/icon/sprite.svg'}#icon-play`
                      }
                    />
                  </svg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={handleNext}>
                  <svg className="player__btn-next-svg" alt="next">
                    <use
                      xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-next`}
                    />
                  </svg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat onClick={handleLoop}>
                  <svg
                    className={
                      !loop
                        ? 'player__btn-repeat-svg'
                        : 'player__btn-repeat-svg-choose'
                    }
                    alt="repeat"
                  >
                    <use
                      xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-repeat`}
                    />
                  </svg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle onClick={handleShuffle}>
                  <svg
                    className={
                      !shaffle
                        ? 'player__btn-shuffle-svg'
                        : 'player__btn-shuffle-svg-choose'
                    }
                    alt="shuffle"
                  >
                    <use
                      xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-shuffle`}
                    />
                  </svg>
                </S.PlayerBtnShuffle>
              </div>
              <div className="player__track-play track-play">
                {isLoadTrack ? (
                  <img src="/music/img/BarEmpty.png" alt="" />
                ) : (
                  <S.TrackPlayContain>
                    <div className="track-play__image">
                      <svg className="track-play__svg" alt="music">
                        <use
                          xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-note`}
                        />
                      </svg>
                    </div>
                    <div className="track-play__author">
                      <p className="track-play__author-link" href="http://">
                        {selectTrack.name}
                      </p>
                    </div>
                    <div className="track-play__album">
                      <p className="track-play__album-link" href="http://">
                        {selectTrack.author}
                      </p>
                    </div>
                  </S.TrackPlayContain>
                )}
                <S.TrackPlayLikeDis>
                  <div
                    className="track-play__dislike _btn-icon"
                    onClick={() => {
                      handleLike();
                    }}
                  >
                    {isLike ? (
                      <img
                        src="/music/img/like.svg"
                        className="track__time-svg"
                        alt="time"
                      />
                    ) : (
                      <svg className="track-play__like-svg" alt="like">
                        <use
                          xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-like`}
                        />
                      </svg>
                    )}
                  </div>
                </S.TrackPlayLikeDis>
              </div>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg" alt="volume">
                    <use
                      xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-volume`}
                    />
                  </svg>
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    min={0}
                    max={100}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </div>
              </div>
            </S.BarVolumeBlock>
          </div>
        </div>
      </S.Bar>
    </>
  );
};
