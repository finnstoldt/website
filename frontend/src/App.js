import styled from 'styled-components';
import { Route } from 'wouter';
import { Front } from './pages/Front';
import { Imprint } from './pages/Imprint';
import { Static } from './pages/Static';

const AppWrapper = styled.div`
  width: 100%;
  height: auto;
  font-family: 'Open Sans';
`;

function App() {
  return (
    <AppWrapper className="App">
      <Route path="/">
        <Front />
      </Route>
      <Route path="/impressum">
        <Imprint />
      </Route>
      <Route path="/static">
        <Static />
      </Route>
    </AppWrapper>
  );
}

export default App;
