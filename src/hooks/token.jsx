import React, { useContext } from 'react';

export const tokenContext = React.createContext(null);

export function useTokenContext() {
  const token = useContext(tokenContext);

  return token;
}
