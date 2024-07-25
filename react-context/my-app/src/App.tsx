import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { useState } from 'react';
import { Product } from './lib';
import { CartContext } from './components/CartContext';
export function App() {
  const [cartContents, setCartContents] = useState<Product[]>([]);
  function addItem(product: Product) {
    const newCartContents = [...cartContents, product];
    setCartContents(newCartContents);
  }
  const cartValue = {
    cart: cartContents,
    addToCart: addItem,
  };
  return (
    <CartContext.Provider value={cartValue}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        s
      </Routes>
    </CartContext.Provider>
  );
}
