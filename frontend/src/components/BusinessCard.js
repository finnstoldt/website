import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import React, { useContext } from 'react';
import { BusinessCardContext } from '../contexts/BusinessCardContext';
import { Logo } from './Logo';
import { ContactInfo } from './ContactInfo';

const CardSide = styled.div`
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.3);
  display: block;
  width: 500px;
  height: 324px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    height: 250px;
  }
`;

const FrontSide = styled(CardSide)`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    box-shadow: 15px 15px 30px 0px rgba(0, 0, 0, 0.4);
  }
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
  user-select: none;
  pointer-events: none;
  letter-spacing: -2px;
`;

const BackSide = styled(CardSide)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 50px 50px 30px;

  @media screen and (max-width: 500px) {
    padding: 30px 30px 30px 30px;
  }
`;

const CardFlipped = styled.div`
  transition: 300ms;

  /*& ${FrontSide}:hover {
    transform: scale(1.03);
  }*/
`;

const CardLogo = styled(Logo)`
  font-size: 40px;

  @media screen and (max-width: 500px) {
    font-size: 35px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

const CardContactInfo = styled(ContactInfo)`
  align-self: flex-end;
`;

function BusinessCard() {
  const [context, setContext] = useContext(BusinessCardContext);
  return (
    <CardFlipped>
      <ReactCardFlip isFlipped={context.flipped} flipDirection="horizontal">
        <FrontSide onClick={() => setContext({ flipped: !context.flipped })}>
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

export { BusinessCard };
