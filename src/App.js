import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import FilterSelector from './components/FilterSelector';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <FilterSelector />
        <div style={{ marginLeft: '260px' }}>
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
