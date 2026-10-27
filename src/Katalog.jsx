import { Link } from 'react-router-dom'
import KartaZasobu from './KartaZasobu'

function Katalog({ lista, status, filtrA, filtrB, setFiltrA, setFiltrB, usun, zmienFlage }) {
  if (status === 'ladowanie') return <div>Ładowanie danych...</div>;
  if (status === 'blad') return <div>Wystąpił błąd pobierania danych.</div>;

  const widoczne = lista.filter(element => {
    if (filtrA != '' && filtrA != undefined && filtrB != '' && filtrB != undefined)
      return element.liczba >= filtrA && element.liczba <= filtrB
    else
      return true;
    });

  return (
    <>
      <div>
      <h2>Liczba pozycji: {lista.length}</h2>
      <div className="mb-4">
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Od"
          value={filtrA}
          onChange={(e) => setFiltrA(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Do"
          value={filtrB}
          onChange={(e) => setFiltrB(e.target.value)}
        />
      </div>
      <div className="row g-4">
        {widoczne.map(element => (
          <KartaZasobu
            key={element.identyfikator}
            element={element}
            usun={usun}
            zmienFlage={zmienFlage}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Katalog
