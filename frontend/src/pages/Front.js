import styled from 'styled-components';
import { Link } from 'wouter';
import { BusinessCard } from '../components/BusinessCard';

const FrontWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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

export function Front() {
  return (
    <FrontWrapper>
      <BusinessCard></BusinessCard>
      <ImprintLink href="/impressum">Impressum</ImprintLink>
    </FrontWrapper>
  );
}
