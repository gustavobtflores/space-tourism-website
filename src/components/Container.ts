import styled from "styled-components";

interface ContainerProps {
  backgroundImage: string | undefined;
}

const Container = styled.div<ContainerProps>`
  max-width: 1440px;
  background: ${(props): any => `url(${props.backgroundImage}) no-repeat center center`};
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Container;
