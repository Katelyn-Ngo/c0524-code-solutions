import { useEffect, useState } from 'react';
import { type Product, readCatalog } from '../lib';
import { toDollars } from '../lib';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const product = await readCatalog();
        setProducts(product);
      } catch (error) {
        setError(error);
      } finally {
        isLoading(false);
      }
    }
    loadProducts();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 text-left">
      <h1 className="text-3xl font-bold mb-8">Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.productId}
            className="border rounded-lg p-4 shadow-lg">
            <Link to={`/details/${product.productId}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
            </Link>
            <h2 className="font-bold text-xl">{product.name}</h2>
            <p className="text-gray-700 mb-2">{toDollars(product.price)}</p>
            <p className="text-gray-600 mb-4">{product.shortDescription}</p>
            <Link
              to={`/details/${product.productId}`}
              className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
