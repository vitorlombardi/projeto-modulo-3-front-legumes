import React from "react";
import { Link } from 'react-router-dom';
import Vendedor from "../../vendedor"
import Header from "../../header"



export default class Promocao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [
        {
          id: 1,
          nome: "Melancia",
          url: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/01/09/melancia-1.jpg",
          valor:"R$7,00"
        },

        {
          id: 2,
          nome: "beringela",
          url: "https://www.cozinhatecnica.com/wp-content/uploads/2019/01/berinjela-tipos-de-berinjela.jpg",
          valor:"R$4,00"
        },

        {
          id: 3,
          nome: "Jabuticaba",
          url: "https://revista.abrale.org.br/wp-content/uploads/2017/05/imagem-jabuticaba.jpg",
          valor:"R$5,40"
        },

        {
          id: 4,
          nome: "laranja",
          url: "https://www.remedio-caseiro.com/wp-content/uploads/2014/02/20190923-laranjas.jpg",
          valor:"R$4,00"
        },

        {
          id: 5,
          nome: "pimentão",
          url: "https://superbeal.com.br/img/news/pimentao_5bec1934cb264.jpg",
          valor:"R$1,20"
        },

        {
          id: 6,
          nome: "beterraba",
          url: "https://img-21.ccm2.net/8Kr5HtvOOZW1Ayd1UqfBxRG9Cbc=/440x/8742266e8944487db9b242f2d75e57c6/ccm-faq/1404951.jpg",
          valor:"R$2,70"
        },
      ],
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

  }

  deletar = (index) => {
    const { produtos } = this.state;
    this.setState({
      produtos: produtos.filter((p, i) => i !== index),
    });
  };

  render() {
    const { produtos} = this.state;
    return (
      <div className="conteiner">
          <div className="header">
            <div className="bloco">
              <h1>Quitanda da blue</h1>
            </div>
            <div className="opcs">
              <Header/>
              <hr />
            </div>
          </div>
          <div className="dados">
            <Vendedor/>
            <div className="corpo">
              <span className="titulo">Produtos em promoção</span>
              <ul>
                {produtos.map((p, index) => (
                  <li key={p.id}>
                    <h3>{p.nome}</h3>
                    <img src={p.url} alt={p.nome} />
                    <p><b>{p.valor}</b></p>
                    <br />
                    <div className="button">
                      <button className="botao" onClick={() => this.deletar(index)}>Comprar</button>
                    </div>
                  </li>
                ))}
              </ul>
              <br/>
              <br/>
              <Link to="/" className="link">Pagina inicial</Link>
            </div>
          </div>
      </div>
    );
  }
}





