import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
const MenuWrapper = styled.div`
  gap: 20px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
`;

const Section = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
`;

export { Container, MenuWrapper, Section };
