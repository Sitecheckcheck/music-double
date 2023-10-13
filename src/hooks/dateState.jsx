import React, { useContext } from 'react';

export const dateContext = React.createContext([]);

export function useDateContext() {
  const dateState = useContext(dateContext);

  return dateState;
}
