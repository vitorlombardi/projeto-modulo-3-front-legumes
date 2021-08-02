import Header from "../../header"
import { Link } from 'react-router-dom';

const Parceiros = () =>{

    return (
        <>

            <div className="header">
                <div className="bloco">
                <h1>Quitanda da blue</h1>
                </div>
                <div className="opcs">
                <Header/>
                <hr />
                </div> 
            </div>
            <div className="corpo">
                <h2>Parceiros</h2>
                <div className="parceiros">
                    <a href="https://blueedtech.com.br">
                        <img src="https://blueedtech.com.br/wp-content/themes/blue/dist/images/logo-blue-croped.gif" alt="blue" target="_blank"></img >
                    </a>
                    <h2>blue Edtech</h2>
                </div>
                <div className="parceiros">
                    <a href="https://app-saldao-da-blue.herokuapp.com/">
                        <img src="https://i.pinimg.com/280x280_RS/d2/a9/c5/d2a9c51ffca74b1d8c2495836755967d.jpg" alt="blue" target="_blank"></img>
                    </a>
                    <h2>Saldão da Blue</h2>
                    <br/>
                </div>
                <Link to="/" className="link" >Pagina inicial</Link>
            </div>

        </>
    );

};

export default Parceiros; 