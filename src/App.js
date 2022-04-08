import './App.css';
import Product from './case.js'

function App() {
 Product.all('hey','man')
//  Product.test()
  return (
    <button className="App" onClick={Product.test}>
      tinder
    </button>
  );
}

export default App;
