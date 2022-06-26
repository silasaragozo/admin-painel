import React from "react";
import { useTasks } from "../../providers/Tasks";
import * as S from "./style";
import Image from "next/image";
import Animation from "../Animation";
import { HiFolder } from "react-icons/hi";
import folders from "../../../src/mock/folders.json";
import { useScreen } from "../../providers/Screen";

export default function Drawer() {
  const { showingTasks } = useTasks();
  const { setShowingHome, showingHome } = useScreen();
  return (
    <>
      <Animation>
        <S.Container>
          <>
            <h2> {showingTasks?.title}</h2>
            {showingTasks?.img && (
              <Image src={showingTasks?.img} alt="" height={280} width={300} />
            )}
            <p>{showingTasks?.description}</p>
          </>
          <>
            <h2>You folders</h2>
            {folders?.data.map((folder) => (
              <S.Folders>
                <S.Row>
                  <HiFolder size={64} color={folder?.color} />
                  <h2> {folder?.title}</h2>
                </S.Row>
              </S.Folders>
            ))}
          </>
        </S.Container>
      </Animation>
    </>
  );
}
