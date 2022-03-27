import styled from "styled-components";

const Heading1 = styled.h1`
  font-size: 150px;
  font-family: "Bellefair", serif;
  color: #ffffff;
  font-weight: 400;
`;

const Heading2 = styled.h2`
  font-size: 100px;
  font-family: "Bellefair", serif;
  color: #ffffff;
  font-weight: 400;
  text-transform: uppercase;
`;

const Heading5 = styled.h5`
  font-size: 28px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 4.75px;
  color: ${(props) => (props.color === "blue" && "#d0d6f9") || (props.color === "white" && "#ffffff")};
  font-weight: 400;
`;

const BodyText = styled.p`
  font-size: 18px;
  line-height: 32px;
  font-family: "Barlow", sans-serif;
  color: #d0d6f9;
  font-weight: 400;
`;

const SubHeading1 = styled.h6`
  font-family: "Bellefair", serif;
  font-size: 28px;
  font-weight: 400;
  color: #ffffff;
`;

const SubHeading2 = styled.h6`
  font-family: "Barlow Condensed", serif;
  font-size: 14px;
  letter-spacing: 2.36px;
  color: #d0d6f9;
  font-weight: 400;
  text-transform: uppercase;
`;

export { Heading1, Heading2, Heading5, BodyText, SubHeading1, SubHeading2 };
