import React, { useContext } from 'react';

export const isPlayingContext = React.createContext(false);

export function useIsPlayingContext() {
  const isPlaying = useContext(isPlayingContext);

  return isPlaying;
}
