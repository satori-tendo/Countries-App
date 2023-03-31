import React, { useEffect, useState, FC } from 'react';
import styled from 'styled-components';
import './App.css';
import Detail from './components/Detail.tsx';
import Header from './components/Header.tsx';
import Main from './components/Main.tsx';
import SearchResults from './components/SearchResults';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App: FC = () => {

  const [mode, setMode] = useState<'main' | 'detail'>('main')

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path='/search/:string' element={<SearchResults />}/>
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

const AppWrapper = styled.div`
  padding: 0px 10px;
`

export default App;
