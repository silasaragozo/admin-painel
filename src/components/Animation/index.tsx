import React from "react";

import * as S from "./style";

interface IButtonProps {
  children?: any;
}
const Animation = ({children}: IButtonProps) => {
  return (
    <>
      <S.Content>{children}</S.Content>
    </>
  );
};

export default Animation;
