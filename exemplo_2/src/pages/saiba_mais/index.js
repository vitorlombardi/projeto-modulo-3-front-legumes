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
                <h2>Saiba mais sobre a quitanda da blue</h2>
                <br/>
                <div className="saiba_mais">
                    <p><b>
                    - Um projeto para ajudar produtores, ou donos de fazendas clandestinas a encontrar clientes e ajudar a preguiçosos ou pessoas ocupadas a adquirir produtos no conforto de suas casas ou onde quiserem, por um preço "justo" claro.
                    </b></p>
                    <br/>
                    <p><b>
                    - Todos da equipe da quitanda e seus vendedores estão comprometidos a um bom atendimento e ótimos produtos, sempre nos esforçamos muito para que todos pedidos sejam atendidos e entregues no prazo.
                    </b></p>
                    <br/>
                </div>
                <Link to="/" className="link">Pagina inicial</Link>
            </div>

        </>
    );

};

export default Parceiros; 