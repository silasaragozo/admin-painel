import { cp } from "fs";
import styled, { css } from "styled-components";

interface IconListProps {
  active?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.bgSecondary};
  max-width: 100px;
  min-width: 100px;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 3px 0px 15px 1px rgba(0, 0, 0, 0.05);
`;

export const IconListActive = styled.div<IconListProps>`
  position: absolute;
  right: -1rem;
  height: 32px;
  border-radius: 50px;
  border-right: 6px solid
    ${(props) => (props.active ? props.theme.primary : "transparent")};
  animation-name: fadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
  opacity: 1;
  &:active {
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const IconList = styled.div<IconListProps>`
  position: relative;
  margin-top: 2rem;
  padding: auto;
  display: flex;
  justify-content: center;
  color: ${(props) => (props.active ? props.theme.primary : props.theme.text)};
  -webkit-transition: 0.3s ease-in;
     -moz-transition: 0.3s ease-in;
     -o-transition: 0.3s ease-in;
     transition: 0.3s ease-in;
  &:hover {
    -webkit-transition: 0.3s ease-in;
     -moz-transition: 0.3s ease-in;
     -o-transition: 0.3s ease-in;
     transition: 0.3s ease-in;
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }
`;
