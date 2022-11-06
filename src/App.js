import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
max-width: 1440px;
margin: 0 auto;
`

export default App;
