import { useState } from 'react'
import './App.css'
import Pozycja from './Pozycja'

const seriale = [
  "Ranczo",
  "Breaking Bad",
  "Stranger Things",
  "Przyjaciele",
  "Wiedźmin",
];

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(1);

  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(name);

    const serial = seriale[number - 1];
    if (serial == undefined) console.log("Nieprawidłowy numer serialu");
    else console.log(serial);
  }

  return (
    <>
      <h3>Liczba seriali: {seriale.length}</h3>

      <ol>
        {seriale.map((serial, i) => <Pozycja key={i} name={serial}></Pozycja> )}
      </ol>

      <form onSubmit={e => handleSubmit(e)}>
        <label>Imie i nazwisko:</label>
        <input className="form-control" value={name} onChange={e => setName(e.target.value)}></input>

        <label>Numer serialu:</label>
        <input className="form-control" type="number" value={number} onChange={e => setNumber(e.target.value)}></input><br />

        <input className="btn btn-primary" type="submit" value="Zatwierdź wybór"></input>
      </form>
    </>
  )
}

export default App
