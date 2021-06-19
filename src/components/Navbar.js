import { Link } from 'react-router-dom'

const Navbar = () => {
    const styles = {
        color: 'white',
        backgroundColor: '#f1356d',
        borderRadius: '8px'
    }
  return (
    <div className="navbar">
      <h1>Mario's Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={styles}>New Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
