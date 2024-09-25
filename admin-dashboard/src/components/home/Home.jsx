import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>This is Home page.</h1>
        <Link to='/'>App</Link>
        <Link to='/user'>User</Link>
        <Link to='/product'>Product</Link>
    </div>
  )
}

export default Home;
