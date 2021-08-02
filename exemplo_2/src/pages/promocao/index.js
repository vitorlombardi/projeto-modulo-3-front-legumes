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
          nome: "Espinafre",
          url: "https://static.tuasaude.com/media/article/ad/da/beneficios-do-espinafre_18895_l.jpg",
        },

        {
          id: 2,
          nome: "Batata",
          url: "http://www.cabanamontefusco.com.br/wp-content/uploads/2019/04/Surpreenda-se-com-curiosidades-sobre-a-batata-Cabana-Montefuscoe.jpg",
        },

        {
          id: 3,
          nome: "Rúcula",
          url: "https://s3.static.brasilescola.uol.com.br/be/2021/02/rucula.jpg",
        },

        {
          id: 4,
          nome: "Brócolis",
          url: "https://conteudo.imguol.com.br/c/entretenimento/53/2020/05/04/brocolis-1588626077191_v2_450x337.jpg.webp",
        },

        {
          id: 5,
          nome: "Abobrinha",
          url: "https://conteudo.imguol.com.br/c/entretenimento/5c/2019/04/25/abobrinha-1556223714538_v2_450x337.jpg.webp",
        },

        {
          id: 6,
          nome: "Chuchu",
          url: "https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/6/2019/04/beneficios-do-chuchu-656x420.jpg",
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





