import './User.css';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div>
        <h1>This is User page.</h1>
        <Link to='/'>App</Link>
        <Link to='/home'>Home</Link>
        <Link to='/product'>Product</Link>
    </div>
  )
}

export default User;
