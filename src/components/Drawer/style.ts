import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => props.theme.bgSecondary};
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  padding: 2rem;
  img {
    object-fit: cover;
    border-radius: 1rem;
  }
`;
 export const Folders = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
 `
 export const Row = styled.div`
 display: flex;
 align-items: center;
 gap: 1rem;
 width: 100%;
`