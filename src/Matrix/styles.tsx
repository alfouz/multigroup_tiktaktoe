import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vh;
  background: red;
`;
