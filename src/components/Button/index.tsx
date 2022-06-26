import React from "react";

import * as S from "./style";

interface IButtonProps {
  children?: string;
  onClick?: () => void;
}
const Button = ({children, onClick}: IButtonProps) => {
  return (
    <>
      <S.Button onClick={onClick}>{children}</S.Button>
    </>
  );
};

export default Button;
