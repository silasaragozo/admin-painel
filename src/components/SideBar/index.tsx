import React from "react";
import Logo from "../Logo";

import * as S from "./style";
import { HiHome, HiFolder, HiCog } from "react-icons/hi";
import { ScreenType, useScreen } from "../../providers/Screen";
const SideBar = () => {
  const { setShowingHome, showingHome } = useScreen();
  return (
    <>
      <S.Container>
        <div>
          <Logo />
          <S.IconList
            onClick={() => setShowingHome(ScreenType.dashboard)}
            active={showingHome === "Dashboard"}
          >
            <S.IconListActive active={showingHome === "Dashboard"}></S.IconListActive>
            <HiHome size={32} />
          </S.IconList>
          
          <S.IconList
            onClick={() => setShowingHome(ScreenType.folders)}
            active={showingHome === "Folders"}
          >
            <S.IconListActive active={showingHome === "Folders"}></S.IconListActive>
            <HiFolder size={32} />
          </S.IconList>
        </div>
        <S.IconList
          onClick={() => setShowingHome(ScreenType.settings)}
          active={showingHome === "Settings"}
        >
          <S.IconListActive active={showingHome === "Settings"}></S.IconListActive>
          <HiCog size={32} />
        </S.IconList>
      </S.Container>
    </>
  );
};

export default SideBar;
