import React, { useEffect, useState, FC } from 'react';
import Detail from './components/Detail/Detail.tsx';
import Header from './components/Header/Header.tsx';
import Main from './components/Main/Main.tsx';
import SearchResults from './components/SearchResults/SearchResults';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import s from './App.module.css'


const App: FC = () => {


  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path='/search/:string' element={<SearchResults />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
