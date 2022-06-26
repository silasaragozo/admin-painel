import React from "react";

import * as S from "./style";
import logoImg from "../../assets/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image src={logoImg} alt="" width="64" height="64" />
    </>
  );
};

export default Logo;
