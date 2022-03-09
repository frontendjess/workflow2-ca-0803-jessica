// @ts-check

import './App.css';
import newProduct from './scripts';

console.log(newProduct)

function App() {
  return (
    <div className="App">
      <p>Question 3</p>
      {newProduct.id} {newProduct.code} {newProduct.title}
  
    </div>
  );
}

export default App;
