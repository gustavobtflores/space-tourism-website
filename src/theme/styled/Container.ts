import styled from "styled-components";

interface ContainerProps {
  backgroundImage: string;
}

const Container = styled.div<ContainerProps>`
  max-width: 1440px;
  background: ${(props) => `url(${props.backgroundImage}) no-repeat center center`};
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export default Container;
