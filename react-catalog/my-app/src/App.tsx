import { Catalog } from './pages/Catalog';
import { Route, Routes } from 'react-router-dom';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
