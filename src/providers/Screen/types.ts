import { Dispatch, SetStateAction } from 'react';
import { ScreenType } from './index';
export interface ScreenContextData {
    setShowingHome: Dispatch<SetStateAction<string>>,
    showingHome: ScreenType;
}