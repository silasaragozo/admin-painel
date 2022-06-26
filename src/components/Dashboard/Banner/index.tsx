import React from "react";
import * as S from "./style";
import goalImg from "../../../assets/girl.png";
import Image from "next/image";
import Button from "../../Button";

export default function Banner() {
  return (
    <S.Container>

      <S.Title>Goal achieved</S.Title>
      <S.SubTitle>Check all results</S.SubTitle>
      <S.Button>
      <Button>See the list</Button>
      </S.Button>
      <S.Img>
        <Image src={goalImg} alt=""   />
      </S.Img>
    </S.Container>
  );
}
