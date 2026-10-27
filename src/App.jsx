import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Katalog from './Katalog';
import Dodaj from './Dodaj';
import Szczegoly from './Szczegoly';
import NotFound from './NotFound';

import './App.css'

function App() {
  const [lista, setLista] = useState([]);
  const [status, setStatus] = useState('ladowanie');
  const [filtrA, setFiltrA] = useState('');
  const [filtrB, setFiltrB] = useState('');

  useEffect(() => {
    fetch('/dane.json')
      .then(res => {
        if (!res.ok) throw new Error('Błąd');
        return res.json();
      })
      .then(data => {
        setLista(data);
        setStatus('gotowe');
      })
      .catch(() => setStatus('blad'));
  }, []);

  const usun = (identyfikator) => {
    setLista(lista.filter(element => element.identyfikator !== identyfikator));
  };

  const zmienFlage = (identyfikator) => {
    setLista(lista.map(element => (element.identyfikator === identyfikator ? { ...element, wyprzedany: !element.wyprzedany } : element)));
  };

  const dodaj = (nowy) => {
    const maxId = lista.length > 0 ? Math.max(...lista.map(element => element.identyfikator)) : 0;
    setLista([...lista, { ...nowy, identyfikator: maxId + 1 }]);
  };


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route 
              path="/" 
              element={
                <Katalog 
                  lista={lista} 
                  status={status} 
                  filtrA={filtrA} 
                  filtrB={filtrB} 
                  setFiltrA={setFiltrA} 
                  setFiltrB={setFiltrB} 
                  usun={usun} 
                  zmienFlage={zmienFlage}
                />
              } 
            />
            <Route path="/dodaj" element={<Dodaj dodaj={dodaj} />} />
            <Route path="/:id" element={<Szczegoly lista={lista} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
