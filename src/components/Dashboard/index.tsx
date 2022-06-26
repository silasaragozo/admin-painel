import React from "react";
import Banner from "../Banner";
import Drawer from "../Drawer";
import * as S from "./style";
import goalImg from "../../assets/tasks/task-01.jpg";
import CardTask from "../Cards/CardTask";
import tasks from "../../../src/mock/tasks.json";
import { useTasks } from "../../providers/Tasks";

export default function Dashboard() {
  const { showingTasks, setShowingTasks } = useTasks();
  return (
    <S.Container>
      <S.Content>
        <S.RowBetween>
          <h2>Your tasks</h2>
          <p>See more</p>
        </S.RowBetween>
        <S.ListRow>
          {tasks?.data?.map((task) => (
            <CardTask
            key={task?.title}
              title={task?.title}
              img={task?.img}
              subTitle={task?.description}
              onClick={() =>
                setShowingTasks({
                  title: task?.title,
                  description: task?.description,
                  img: task?.img,
                })
              }
            />
          ))}
        </S.ListRow>
      </S.Content>
    </S.Container>
  );
}
