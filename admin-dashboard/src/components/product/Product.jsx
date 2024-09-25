import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
        <h1>This is Product Page.</h1>
        <Link to='/'>App</Link>
        <Link to='/home'>Home</Link>
        <Link to='/user'>User</Link>
    </div>
  )
}

export default Product;
