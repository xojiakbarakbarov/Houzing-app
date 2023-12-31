import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #FFFFFF",
        color: "#ffff",
      };

    case "light":
      return {
        background: "#ffff",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };

    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#ffff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#ffff",
      };
  }
};
const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;

  font-sie: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  outline: none;
  border: 1px solid #e6e9ec;
  //  ${getType}
  padding-left: ${({ icon }) => (icon ? "50px" : "20px")};
`;



export { Container};
