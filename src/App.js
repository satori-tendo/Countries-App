import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  padding: 0px 10px;
`

export default App;
