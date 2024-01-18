import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 571px;

`;

const Arrow = styled.div`
  position: absolute;
  top: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  padding: 18px;
  border-radius: 50%;
  background: black;
  opacity: 0.2;
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 571px;
`;

export { Container, Arrow, Img };
