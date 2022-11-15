import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [mode, setMode] = useState('detail')

  return (
    <AppWrapper>
      <Header />
      {mode == 'main' && <Main />}
      {mode == 'detail' && <Detail />}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  padding: 0px 10px;
`

export default App;
