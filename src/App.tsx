import React, { useEffect, useState, FC } from 'react';
import styled from 'styled-components';
import './App.css';
import Detail from './components/Detail.tsx';
import Header from './components/Header.tsx';
import Main from './components/Main.tsx';
import Loading from './components/Loading.tsx';
import axios from 'axios';


export interface Country {
  name: {common: string, official: string}
  flags: {png: string}
  population: number
  capital: string[]
  region: string
}

const App: FC = () => {

  const [mode, setMode] = useState<'main' | 'detail' | 'none'>('none')
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => { // посмотреть как типизировать. если это вообще типизируется
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setMode('main')
        setCountries(response.data)
      })
  }, [])

  console.log(countries);
  

  return (
    <AppWrapper>
      <Header />
      {mode == 'none' && <Loading />}
      {mode == 'main' && countries && <Main countries={countries}/>}
      {mode == 'detail' && <Detail />}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  padding: 0px 10px;
`

export default App;
