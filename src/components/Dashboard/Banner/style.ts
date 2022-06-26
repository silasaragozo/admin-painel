import styled, { css } from "styled-components";
import logoImg from "../../../assets/goal.png";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.primary};
  background-image: url("/images/forms.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  padding: 2rem 2rem 2rem 5rem;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.textWhite};
  font-family: "Vujahday Script", cursive;
  letter-spacing: 0.5rem;
`;
export const SubTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.textWhite};
  letter-spacing: 0.3rem;
`;
export const Img = styled.div`
  img {
    height: 350px !important;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.2));
    
  }

  right: 10%;
  position: absolute;
  bottom: -4px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Button = styled.div`
  margin-top: 1rem;
  width: 300px;
`;
