import React, { useEffect, useState, FC } from 'react';
import styled from 'styled-components';
import './App.css';
import Detail from './components/Detail.tsx';
import Header from './components/Header.tsx';
import Main from './components/Main.tsx';
import axios from 'axios';




const App: FC = () => {

  const [mode, setMode] = useState<'main' | 'detail'>('main')
  

  
  

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
