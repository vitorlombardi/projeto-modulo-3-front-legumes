import React from "react";
import { Link } from 'react-router-dom';
import Vendedor from "../../vendedor"
import Header from "../../header"



export default class Promocao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legumes: [
        {
          id: 1,
          nome: "Melancia",
          url: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/01/09/melancia-1.jpg",
        },

        {
          id: 2,
          nome: "beringela",
          url: "https://www.cozinhatecnica.com/wp-content/uploads/2019/01/berinjela-tipos-de-berinjela.jpg",
        },

        {
          id: 3,
          nome: "Jabuticaba",
          url: "https://revista.abrale.org.br/wp-content/uploads/2017/05/imagem-jabuticaba.jpg",
        },

        {
          id: 4,
          nome: "laranja",
          url: "https://www.remedio-caseiro.com/wp-content/uploads/2014/02/20190923-laranjas.jpg",
        },

        {
          id: 5,
          nome: "pimentão",
          url: "https://superbeal.com.br/img/news/pimentao_5bec1934cb264.jpg",
        },

        {
          id: 6,
          nome: "beterraba",
          url: "https://img-21.ccm2.net/8Kr5HtvOOZW1Ayd1UqfBxRG9Cbc=/440x/8742266e8944487db9b242f2d75e57c6/ccm-faq/1404951.jpg",
        },
      ],
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

  }

  deletar = (index) => {
    const { legumes } = this.state;
    this.setState({
      legumes: legumes.filter((l, i) => i !== index),
    });
  };

  render() {
    const { legumes} = this.state;
    return (
      <div className="conteiner">
        <main className="main">
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
                {legumes.map((l, index) => (
                  <li key={l.id}>
                    <h3>{l.nome}</h3>
                    <img src={l.url} alt={l.nome} />
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
        </main>
      </div>
    );
  }
}





