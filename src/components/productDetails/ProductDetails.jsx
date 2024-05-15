import { Link } from 'react-router-dom';
import './ProductDetails.css';

export default function ProductDetails({book}) {
  return (
    <div className="product-details">
        <div>
            <h3>SKU:</h3>
            <p>BW-1003037</p>
        </div>
        <div>
            <h3>Categories:</h3>
            <p>{book.categories.map(category => category)}</p>
        </div>
        <div>
            <h3>Book Author:</h3>
            <Link to={'/'} className='product-details-author'>{book.author}</Link>
        </div>
        <div>
            <h3>Book Format:</h3>
            <Link to={'/'} className='product-details-format'>{book.format}</Link>
        </div>
    </div>
  )
}