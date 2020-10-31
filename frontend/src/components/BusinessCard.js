import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { ContactInfo } from "./ContactInfo";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CardSide = styled.div`
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.3);
  display: block;
  width: 500px;
  height: 324px;
  position: relative;
`;

const FrontSide = styled(CardSide)`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 300ms;
  cursor: pointer;
`;

const FrontSideLogo = styled.div`
  color: white;
  border: 3px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 70px;
  font-weight: 800;
  font-size: 50px;
  line-height: 50px;
  transition: 300ms;
`;

const BackSide = styled(CardSide)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /*align-items: flex-start;
  justify-content: flex-start;*/
  padding: 20px;
`;

const CardFlipped = styled.div`
  transition: 300ms;

  &:hover {
    transform: scale(1.03);
  }
`;

// Why isn't this working?
const CardLogo = styled(Logo)`
  display: none;
`;

const CardContactInfo = styled(ContactInfo)`
  display: none;
`;

function Card() {
  const [flipped, setFlipped] = useState(false);
  return (
    <CardFlipped>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <FrontSide onClick={() => setFlipped(!flipped)}>
          <FrontSideLogo>FS</FrontSideLogo>
        </FrontSide>
        <BackSide>
          <CardLogo></CardLogo>
          <CardContactInfo></CardContactInfo>
        </BackSide>
      </ReactCardFlip>
    </CardFlipped>
  );
}

function BusinessCard() {
  return (
    <Wrapper>
      <Card></Card>
    </Wrapper>
  );
}

export { BusinessCard };
