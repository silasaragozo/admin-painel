import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.bgSecondary};
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  padding: 2rem;
`;
