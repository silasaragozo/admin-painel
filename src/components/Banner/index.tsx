import React from "react";
import * as S from "./style";
import Image from "next/image";
import Button from "../Button";
interface IBannerProps {
  title: string;
  subTitle?: string;
  buttonTitle?: string;
  img?: string;
}
const Banner = ({ title, subTitle, buttonTitle, img }: IBannerProps) => {
  return (
    <S.Container>
      <S.Title> {title}</S.Title>
      <S.SubTitle> {subTitle}</S.SubTitle>
      <S.Button>{buttonTitle && <Button>{buttonTitle}</Button>}</S.Button>
      <S.Img>
        <Image src={img} alt="" />
      </S.Img>
    </S.Container>
  );
};
export default Banner;
