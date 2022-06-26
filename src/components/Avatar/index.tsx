import React from "react";

import * as S from "./style";
import logoImg from "../../assets/profile.png";
import Image from "next/image";

const Avatar = () => {
  return (
    <>
      <S.Img>
        <Image src={logoImg} alt="" width="42" height="42" />
      </S.Img>
    </>
  );
};

export default Avatar;
