import styled, { css } from "styled-components";

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;  
  width: 300px;  
  justify-content: left;
`;
export const Title = styled.h1`
  font-size: 22px;
  color: ${(props) => props.theme.text};
`;
export const SubTitle = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.textMuted};
`;
export const Img = styled.div`
  img {
    border-radius: 1rem;
    object-fit: cover;
  }

`;

