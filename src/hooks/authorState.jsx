import React, { useContext } from 'react';

export const authorContext = React.createContext([]);

export function useAuthorContext() {
  const authorState = useContext(authorContext);

  return authorState;
}
