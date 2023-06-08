import React, { useCallback, useContext, useEffect, useState } from 'react';
import { sendReport, Action,getData,sendReview,Actions ,getReport,deleteItem,IgnoreReport,unactive,getReview} from './firebaseUseData';
export const DataContext = React.createContext({});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const contextValue = {
    sendReport,
    Action,
    getData,
    sendReview,
    Actions,
    getReport,
    deleteItem,
    IgnoreReport,
    unactive,
    getReview,
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
