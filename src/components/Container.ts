import styled from "styled-components";

interface ContainerProps {
  backgroundImage: string | undefined;
  backgroundImageTablet: string | undefined;
  backgroundImageMobile: string | undefined;
}

const Container = styled.div<ContainerProps>`
  max-width: 1440px;
  background: ${(props) => `url(${props.backgroundImage}) no-repeat center center`};
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media screen and (max-width: 992px) {
    background: ${(props) => `url(${props.backgroundImageTablet}) no-repeat center center`};
    background-size: cover;
  }

  @media screen and (max-width: 640px) {
    background: ${(props) => `url(${props.backgroundImageMobile}) no-repeat center center`};
    padding: 24px;
    background-size: cover;
  }
`;

export default Container;
