import { Link } from 'react-router-dom';
import './index.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">fraspy</Link>
      </h1>
      <div className="links">
        <a className="ln" href="https://www.linkedin.com/in/akash-shrivas-ravishankar-1a8203285/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="yt" href="https://www.youtube.com/@frasperclip" target="_blank" rel="noreferrer">
          YouTube
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
