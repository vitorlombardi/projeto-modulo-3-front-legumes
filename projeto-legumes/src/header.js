import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="bloco_opcs">
        <Link to="/duvidas" className="link">Dúvidas</Link>
        <Link to="/sobre" className="link">sobre a quitanda da blue</Link>
        <Link to="/parceiros" className="link">Nossos parceiros</Link>
      </div>
    );
  };



export default Header;