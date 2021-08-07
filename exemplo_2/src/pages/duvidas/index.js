import Header from "../../header"
import { Link } from 'react-router-dom';


const Duvidas = () =>{

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
                <h2>Dúvidas frequentes</h2>
                <div className="duvidas">
                    <h2>-O site e confiavel ?</h2>
                    <h3>R: Sim, pode confiar</h3>
                    <br/>
                    <h2>-Devo me preocupar de o vendedor pedir a foto e a senha do meu cartao ?</h2>
                    <h3>R: Não, ele so deve ta tentando te ajudar a completar a compra, confia </h3>
                    <br/>
                    <h2>-comprei uma melancia no site e apareceu uma compra de uma lancha na fatura do meu cartão o que fazer ?</h2>
                    <h3>R: hummm... talvez ligar para a polícia</h3>
                    <br/>
                    <h2>-Oque devo fazer se o produto não chegar no prazo ?</h2>
                    <h3>R:Entre em contato com o vendedor ou faça uma reclamação <a href="https://www.reclameaqui.com.br" className="link" target="_blank" rel="noreferrer" >aqui</a></h3>
                    <br/>
                </div>
                <Link to="/" className="link" target="_blank">Pagina inicial</Link>
            </div>


        </>
    );

};

export default Duvidas; 