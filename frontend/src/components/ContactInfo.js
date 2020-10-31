import styled from "styled-components";
import envelope from "../images/envelope.icon.png";

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
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 7px;
  margin-left: 1px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: #000;
`;

function ContactInfo() {
  return (
    <div>
      <Link href="mailto:***REMOVED***">
        <Icon url={envelope}></Icon>
        <Text>***REMOVED***</Text>
      </Link>
    </div>
  );
}

export { ContactInfo };
