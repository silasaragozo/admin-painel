import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: calc(100vw - 400px);
  
`;
export const Content = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 3rem;
  width: 100%;
  
`;
export const NavBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  top: -2rem;
`;
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
