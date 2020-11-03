import styled from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export function Static() {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
}
