import styled from "styled-components";

const Heading1 = styled.h1`
  font-size: 150px;
  font-family: "Bellefair", serif;
  color: #ffffff;
  font-weight: 400;

  @media screen and (max-width: 640px) {
    font-size: 80px;
    text-align: center;
  }
`;

const Heading2 = styled.h2`
  font-size: 100px;
  font-family: "Bellefair", serif;
  color: #ffffff;
  font-weight: 400;
  text-transform: uppercase;
`;

const Heading3 = styled.h3`
  font-family: Bellefair;
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;
  text-align: left;
  color: #ffffff;
  text-transform: uppercase;
`;

const Heading4 = styled.h4`
  font-family: "Bellefair", serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
`;

const Heading5 = styled.h5`
  font-size: 28px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 4.75px;
  color: ${(props) => (props.color === "blue" && "#d0d6f9") || (props.color === "white" && "#ffffff")};
  font-weight: 400;
  line-height: 1.2em;

  @media screen and (max-width: 640px) {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2.7px;
    text-align: center;
  }
`;

const BodyText = styled.p`
  font-size: 18px;
  line-height: 32px;
  font-family: "Barlow", sans-serif;
  color: #d0d6f9;
  font-weight: 400;

  @media screen and (max-width: 640px) {
    font-size: 15px;
    line-height: 25px;
    text-align: center;
  }
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

export { Heading1, Heading2, Heading3, Heading4, Heading5, BodyText, SubHeading1, SubHeading2 };
