import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';

function App() {

  const [mode, setMode] = useState('main')
  const [countries, setCountries] = useState([])
  window.countries = countries;

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  console.log(countries)

  return (
    <AppWrapper>
      <Header />
      {mode == 'main' && <Main countries={countries}/>}
      {mode == 'detail' && <Detail />}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  padding: 0px 10px;
`

export default App;
