import React from 'react';
import CharContext from './CharContext';
import A from '../basic/A';

const CharContainer = () => {
  return (
    <CharContext.Provider value={{color : "blue", fontSize : "30px"}}>
      <A />
    </CharContext.Provider>
  );
};

export default CharContainer;