import { Link } from 'react-router-dom'

function KartaZasobu({ element, usun, zmienFlage }) {
  let border = 'card border-3';
  if (element.wyprzedany && element.liczba >= 50) border = 'card border-success border-3';
  if (element.wyprzedany && element.liczba < 50) border = 'card border-warning border-3';
  
  return (
    <>
      <div className="col">
      <div className={border}>
        <div className="card-body">
          <h5 className="card-title">{element.nazwa}</h5>
          <p className="card-text">Klasa: {element.klasa}</p>
          <p className="card-text">Liczba: {element.liczba}</p>
          <p className="card-text">Wyprzedany: {element.wyprzedany ? 'tak' : 'nie'}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/${element.identyfikator}`} className="btn btn-outline-info">Szczegóły</Link>
            <button onClick={() => zmienFlage(element.identyfikator)} className="btn btn-outline-primary">Dostępność</button>
            <button onClick={() => usun(element.identyfikator)} className="btn btn-danger">Usuń</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default KartaZasobu
