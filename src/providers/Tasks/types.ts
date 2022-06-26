import { Dispatch, SetStateAction } from 'react';
import { TasksType } from './index';
export interface TasksContextData {
    setShowingTasks: Dispatch<SetStateAction<TasksType>>,
    showingTasks: TasksType;
}