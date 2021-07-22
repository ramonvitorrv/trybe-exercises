import './App.css';
import Pokedex from './Components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
