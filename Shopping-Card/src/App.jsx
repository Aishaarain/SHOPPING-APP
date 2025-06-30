import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './Components/ProductList';
import CartPage from './Components/Cart';

import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <nav className="navbar">
       <Navbar/>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
