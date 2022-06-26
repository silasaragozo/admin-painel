import React from "react";
import { useScreen } from "../../providers/Screen";
import SideBar from "../SideBar";
import * as S from "./style";
import Avatar from "../Avatar";
import { HiBell } from "react-icons/hi";
import goalImg from "../../assets/girl.png";
import Banner from "../Banner";
import Dashboard from "../Dashboard";
import Drawer from "../Drawer";
import Animation from "../Animation";
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
            <S.NavRight>
              <HiBell size={32} />
              <Avatar />
            </S.NavRight>
          </S.NavBar>
          {showingHome === "Dashboard" && (
            <Animation>
            <Banner
              title="Goals achieved"
              subTitle="Check all results "
              img={goalImg}
              buttonTitle="See all results"
            />
            </Animation>
          )}
          {props.children}
          <Drawer></Drawer>
        </S.Content>
      </S.Container>
    </>
  );
};

export default LayoutHome;
