import styled from 'styled-components';
import envelope from '../images/envelope.icon.png';
import phone from '../images/phone.icon.png';
import { config } from '../config';

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  transition: 300ms;

  :hover {
    opacity: 0.7;
  }
`;

const Icon = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 13px;
  margin-left: 1px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function ContactInfo({ className }) {
  return (
    <Wrapper className={className}>
      <Link href={'mailto:' + config.email}>
        <Icon url={envelope}></Icon>
        <Text>{config.email}</Text>
      </Link>
      <Link href={'tel:' + config.phone}>
        <Icon url={phone}></Icon>
        <Text>{config.phone}</Text>
      </Link>
    </Wrapper>
  );
}

export { ContactInfo };
