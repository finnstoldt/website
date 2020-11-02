import styled from 'styled-components';

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
      <p>Finn Stoldt</p>
      <h3>Postanschrift:</h3>
      <p>
        Moislinger Allee 90A
        <br /> 23558 Lübeck
      </p>
      <h3>Kontakt:</h3>
      <p>
        Telefon: +49 451 16081585 <br />
        E-Mail: kontakt@finnstoldt.de
      </p>
    </ImprintWrapper>
  );
}
