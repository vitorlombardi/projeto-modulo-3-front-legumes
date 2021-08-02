import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../header"

const Main = () =>{

    return (
      <div className="conteiner">
        
        <main className="main">
          <div className="header">  
            <div className="bloco">
              <h1>Quitanda da blue</h1>
            </div>
            <div className="opcs">
              <Header/>
            </div>
            <hr />
          </div>
         
        </main>
        <div className="bloco_perguntas">
          <h2>Seja bem vindo a quitanda da blue </h2>
          <h2>O que deseja comprar ?</h2>
        </div>
        <div className="bloco_redireciona">
          <Legumes/>
          <Promocao/>
          <Frutas/>
        </div>
      </div>
    );
}


const Legumes = () =>{
  return(

    <div className="img_legume">
      <Link to="/legumes">
        <img src="https://img.itdg.com.br/tdg/images/blog/uploads/2018/02/alimentos-que-ajudam-a-combater-a-azia.jpg?w=1200" alt="lgumes"/>
      </Link>
      <h2>Legumes</h2>
    </div>

  )
}

const Frutas = () =>{
  return(

    <div className="img_fruta">
      <Link to="/frutas" >
        <img src="https://cdn.wizard.com.br/wp-content/uploads/2017/01/05115936/aprenda-os-nomes-das-frutas-em-ingles.jpg" alt="frutas"/>
      </Link>
      <h2>Frutas</h2>
    </div>

  )
}

const Promocao = () => {

  return(
    <div className="img_fruta">
      <Link to="/promocao" >
        <img src="https://www.lojavirtual.com.br/wp-content/uploads/2018/11/Blog-Promoções.png" alt="frutas"/>
      </Link>
      <h2>Produtos em promoção</h2>
    </div>
  )

}





export default Main;