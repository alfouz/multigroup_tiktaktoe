import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vh;
`;

export const InnerContainer = styled.div<{ color: string }>`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color};
  cursor: pointer;
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
`;
