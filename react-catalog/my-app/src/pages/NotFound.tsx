import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h3 className="text-2xl mb-4">
        Uh oh, we could not find the page you were looking for!
      </h3>
      <Link to="/" className="text-blue-500 hover:underline">
        Return to the Catalog
      </Link>
    </div>
  );
}
