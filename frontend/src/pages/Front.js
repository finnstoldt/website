import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';
import { BusinessCard } from '../components/BusinessCard';
import { BusinessCardContext } from '../contexts/BusinessCardContext';
import download from '../images/download.icon.png';
import rotate from '../images/rotate.icon.png';

const FrontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 50px;
  }

  @media screen and (max-width: 500px) {
    padding: 50px 30px;
  }
`;

const ImprintLink = styled(Link)`
  position: absolute;
  display: block;
  bottom: 5px;
  right: 10px;
  color: #000;
  text-decoration: none;
  transition: 300ms;

  &:hover {
    opacity: 0.7;
  }
`;

const ControlButton = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: black;
  background-position: center;
  background-size: 25px auto;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.3);
  transition: 300ms;

  &:hover {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.4);
  }
`;

const RotateButton = styled(ControlButton)`
  background-image: url(${rotate});
  background-position: calc(50% + 1px) 50%;
`;

const DownloadButton = styled(ControlButton)`
  background-image: url(${download});
  background-position: calc(50% + 1px) 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  gap: 15px;
  margin-top: 20px;
`;

export function Front() {
  const [context, setContext] = useState({ flipped: false });
  return (
    <BusinessCardContext.Provider value={[context, setContext]}>
      <FrontWrapper>
        <BusinessCard></BusinessCard>
        <ButtonWrapper>
          <RotateButton
            onClick={() => setContext({ flipped: !context.flipped })}
          />
          <DownloadButton as="a" href="/api/contact/vcard" />
        </ButtonWrapper>
        <ImprintLink href="/impressum">Impressum</ImprintLink>
      </FrontWrapper>
    </BusinessCardContext.Provider>
  );
}
