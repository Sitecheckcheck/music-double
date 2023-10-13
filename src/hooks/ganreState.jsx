import React, { useContext } from 'react';

export const ganreContext = React.createContext([]);

export function useGanreContext() {
  const ganreState = useContext(ganreContext);

  return ganreState;
}
