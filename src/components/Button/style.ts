import styled, { css } from "styled-components";

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.bgSecondary};
  border-radius: 5px;
  height: auto;
  width: 100%;
  padding: 0.5rem;
  font-size: 22px;
  font-weight: 500;
  opacity: 0.8;
  -webkit-transition: 0.3s ease-in;
  -moz-transition: 0.3s ease-in;
  -o-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.textWhite};
    /* border-inline: 1px solid ${(props) => props.theme.bgDefault}; */
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.18);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.18);
    -webkit-transition: 0.3s ease-in;
    -moz-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;
    transition: 0.3s ease-in;
  }
`;
