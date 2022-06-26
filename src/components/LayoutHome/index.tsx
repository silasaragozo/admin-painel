import React from "react";
import { useScreen } from "../../providers/Screen";
import SideBar from "../SideBar";
import * as S from "./style";
import { HiUserCircle } from "react-icons/hi";
interface ILayoutHome {
  children?: any;
}

const LayoutHome = (props: ILayoutHome) => {
  const { setShowingHome, showingHome } = useScreen();
  return (
    <>
      <S.Container>
        <SideBar />
        <S.Content>
          <S.NavBar>
          <h2> {showingHome} </h2>
          <HiUserCircle size={32}/>
          </S.NavBar>
        
          {props.children}</S.Content>
      </S.Container>
    </>
  );
};

export default LayoutHome;
