import styled from 'styled-components';
import { config } from '../config';

const Wrapper = styled.div`
  font-size: 40px;
  pointer-events: none;
  user-select: none;
`;

const Title = styled.div`
  font-size: 1em;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 800;
  color: #000;
  margin-bottom: 0.08em;
`;

const SubTitle = styled.div`
  font-size: 0.65em;
  line-height: 0.65em;
  text-transform: uppercase;
  font-weight: 300;
  color: #aaa;
`;

function Logo({ className }) {
  return (
    <Wrapper className={className}>
      <Title>{config.contact.name}</Title>
      <SubTitle>IT-Dienstleistungen</SubTitle>
    </Wrapper>
  );
}

export { Logo };
