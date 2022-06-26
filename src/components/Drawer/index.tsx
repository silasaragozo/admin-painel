import React from "react";
import { useTasks } from "../../providers/Tasks";
import * as S from "./style";
import Image from "next/image";
import Animation from "../Animation";

export default function Drawer() {
  const { showingTasks, setShowingTasks } = useTasks();
  return (
    <>
    <Animation>
      <S.Container>
        <h1> {showingTasks?.title}</h1>
        {showingTasks?.img && (
          <Image src={showingTasks?.img} alt="" height={280} width={300} />
        )}
        <p>{showingTasks?.description}</p>
      </S.Container>
      </Animation>
    </>
  );
}
