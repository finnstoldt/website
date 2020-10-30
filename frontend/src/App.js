import styled from 'styled-components';
import { BusinessCard } from './components/BusinessCard';

const AppWrapper = styled.div`
  width: 100%;
  height: auto;
  font-family: 'Open Sans';
`;

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <BusinessCard></BusinessCard>
      </AppWrapper>
    </div>
  );
}

export default App;
