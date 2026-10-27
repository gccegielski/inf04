import { useParams, Link } from 'react-router-dom'

function Szczegoly({ lista }) {
  const { id } = useParams();
  const element = lista.find(element => element.identyfikator == id);

  if (!element) {
    return (
      <>
        <div>
          <h2>Nie istnieje.</h2>
          <Link to="/" className="btn btn-secondary mt-3">Wróć do katalogu</Link>
        </div>
      </>
    );
  }
  
  return (
    <>
      <div>
      <h2>{element.nazwa}</h2>
      <ul className="list-group w-50 mb-4">
        <li className="list-group-item">Identyfikator: {element.identyfikator}</li>
        <li className="list-group-item">Nazwa: {element.nazwa}</li>
        <li className="list-group-item">Klasa: {element.klasa}</li>
        <li className="list-group-item">Liczba: {element.liczba}</li>
        <li className="list-group-item">Wyprzedany: {element.wyprzedany ? 'tak' : 'nie'}</li>
      </ul>
      <Link to="/" className="btn btn-secondary">Wróć do katalogu</Link>
    </div>

    </>
  )
}

export default Szczegoly
