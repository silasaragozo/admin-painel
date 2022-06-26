import React, { createContext, useContext, useState } from "react";
import { TasksContextData } from "./types";

const TasksContext = createContext({} as TasksContextData);

export type ReactProps = {
  children?: React.ReactElement;
};

export interface TasksType {
  title: string;
  description: string;
  img: string;

}

export const TasksProvider: React.FC<ReactProps> = ({ children }) => {
  const [showingTasks, setShowingTasks] = useState<TasksType>();
  return (
    <TasksContext.Provider
      value={{
        showingTasks,
        setShowingTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
