import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

function Dodaj({ dodaj }) {
  const nazwaRef = useRef();
  const klasaRef = useRef();
  const liczbaRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nowy = {
      nazwa: nazwaRef.current.value,
      klasa: klasaRef.current.value,
      liczba: parseInt(liczbaRef.current.value),
      wyprzedany: false
    };
    dodaj(nowy);
    navigate('/');
  };
  
  return (
    <>
      <div className="w-50">
      <h2>Dodaj nowy obiekt</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nazwa</label>
          <input type="text" className="form-control" ref={nazwaRef} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Klasa</label>
          <input type="text" className="form-control" ref={klasaRef} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Liczba</label>
          <input type="number" className="form-control" ref={liczbaRef} required />
        </div>
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
    </>
  )
}

export default Dodaj
