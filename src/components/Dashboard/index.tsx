import React from "react";
import Banner from "./Banner";
import Drawer from "./Drawer";
import * as S from "./style";

export default function Dashboard() {
  return (
    <S.Container>
      <Banner/>
      <Drawer></Drawer>
    </S.Container>
  );
}
