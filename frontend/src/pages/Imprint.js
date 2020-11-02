import styled from 'styled-components';
import { config } from '../config';

const ImprintWrapper = styled.div`
  padding: 50px;

  h1,
  p {
    margin-bottom: 20px;
  }
`;

export function Imprint() {
  return (
    <ImprintWrapper>
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>{config.contact.name}</p>
      <h3>Postanschrift:</h3>
      <p>
        {config.contact.street}
        <br /> {config.contact.zip} {config.contact.city}
      </p>
      <h3>Kontakt:</h3>
      <p>
        Telefon: {config.contact.phone} <br />
        E-Mail: {config.contact.email}
      </p>
    </ImprintWrapper>
  );
}
