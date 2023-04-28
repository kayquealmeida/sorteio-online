import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import Formulario from './components/Formulario';
import ListaParticipantes from './components/ListaParticipantes';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Formulario />} />
          <Route path='/' element={<ListaParticipantes />} />
          {/* <Route path='/' element={<Configuracao />}/> */}
          {/* <Route path='/sorteio' element={<Sorteio />}/> */}
        </Routes>
      </RecoilRoot>
  </BrowserRouter>
  );
}

export default App;
