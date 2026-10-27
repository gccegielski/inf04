import { Link } from 'react-router-dom'

function KartaZasobu({ element, usun, zmienFlage }) {
  return (
    <>
      <div className="col">
      <div className={element.flaga ? 'card border-success' : 'card border-danger'}>
        <div className="card-body">
          <h5 className="card-title">{element.nazwa}</h5>
          <p className="card-text">Klasa: {element.klasa}</p>
          <p className="card-text">Liczba: {element.liczba}</p>
          <p className="card-text">Wyprzedany: {element.wyprzedany ? 'tak' : 'nie'}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/${element.identyfikator}`} className="btn btn-outline-info">Szczegóły</Link>
            <button onClick={() => zmienFlage(element.identyfikator)} className="btn btn-outline-primary">Flaga</button>
            <button onClick={() => usun(element.identyfikator)} className="btn btn-danger">Usuń</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default KartaZasobu
