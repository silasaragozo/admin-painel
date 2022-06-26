import React, { createContext, useContext, useState } from 'react';
import { ScreenContextData } from './types';

const ScreenContext = createContext({} as ScreenContextData);

export type ReactProps = {
    children?: React.ReactElement;
}

export enum ScreenType {
    dashboard = "Dashboard",
    folders = "Folders",
    settings = "Settings",
}

export const ScreenProvider: React.FC<ReactProps> = ({children}) => {
  const [showingHome, setShowingHome] = useState<ScreenType>(ScreenType.dashboard)  
  return (
    <ScreenContext.Provider value={{
        showingHome,
        setShowingHome,
    }}>
    {children}
    </ScreenContext.Provider>
  );
}

export const useScreen = () => useContext(ScreenContext)