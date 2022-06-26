import React from "react";
import * as S from "./style";
import Image from "next/image";
interface ICardTaskProps {
  title: string;
  subTitle?: string;
  img?: string;
}
const CardTask = ({ title, subTitle, img }: ICardTaskProps) => {
  return (
    <>
      <S.Content>
        <S.Img>
          <Image src={img} alt="" height={180} width={300} />
        </S.Img>
        <S.Title> {title}</S.Title>
        <S.SubTitle> {subTitle}</S.SubTitle>
      </S.Content>
    </>
  );
};
export default CardTask;
