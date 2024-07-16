import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Product, readProduct } from '../lib';
import { Link } from 'react-router-dom';
import { toDollars } from '../lib';

export function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProduct() {
      try {
        if (productId) {
          const product = await readProduct(parseInt(productId));
          setProduct(product);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct();
  }, [productId]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (error || !product) {
    return (
      <div>
        Error:{error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="relative container mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue hover:underline fixed top-4 left-4 absolute">
        &lt; Back to Catalog{' '}
      </Link>
      <div>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-80 object-contain "
        />
      </div>
      <h1 className="font-bold text-3xl mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2">{toDollars(product.price)}</p>
      <p className="text-gray-600 mb-4">{product.longDescription}</p>
      <button
        onClick={() => {
          alert('Product added to cart!');
          navigate('/');
        }}>
        Add to Card
      </button>
    </div>
  );
}
