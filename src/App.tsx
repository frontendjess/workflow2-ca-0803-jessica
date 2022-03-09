// @ts-check
import './App.css';
import newProduct from './scripts';
import CharactersList from './scripts/Query';

console.log(newProduct)

function App() {
  return (
    <div className="App">
      <h1>Ricky and Morty characters sorted by key ID's in descending order</h1>
      <CharactersList />
    </div>
  );
}

export default App;
