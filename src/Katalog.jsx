import { Link } from 'react-router-dom'
import KartaZasobu from './KartaZasobu'

function Katalog({ lista, status, filtr, setFiltr, usun, zmienFlage }) {
  if (status === 'ladowanie') return <div>Ładowanie danych...</div>;
  if (status === 'blad') return <div>Wystąpił błąd pobierania danych.</div>;

  const widoczne = lista.filter(el => 
    el.nazwa.toLowerCase().includes(filtr.toLowerCase())
  );

  return (
    <>
      <div>
      <h2>Liczba pozycji: {lista.length}</h2>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Szukaj"
          value={filtr}
          onChange={(e) => setFiltr(e.target.value)}
        />
      </div>
      <div className="row g-4">
        {widoczne.map(el => (
          <KartaZasobu
            key={el.id}
            element={el}
            usun={usun}
            przelaczFlage={zmienFlage}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Katalog
