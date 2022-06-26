import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 320px);
  padding-top: 2rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${(props) => props.theme.bgDefault};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.bgDefault};
    border-radius: 10px;
  }
`;
export const RowBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ListRow = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr ;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    justify-items: stretch;
    align-items: stretch;
`;
