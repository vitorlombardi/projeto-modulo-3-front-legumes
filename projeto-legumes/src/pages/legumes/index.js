import React from "react";
import { Link } from 'react-router-dom';
import Vendedor from "../../vendedor"
import Header from "../../header"



export default class Legumes extends React.Component {
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
      nome_legme: "",
      imagem_legume: "",
      editando: false,
      index_editando: null,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { legumes, editando, index_editando, nome_legme, imagem_legume } =
      this.state;

    if (editando) {
      const legumes_atualizado = legumes.map((l, index) => {
        if (index_editando === index) {
          l.nome = nome_legme;
          l.url = imagem_legume;
        }

        return l;
      });

      this.setState({
        legumes: legumes_atualizado,
        index_editando: null,
        editando: false,
      });
    } else {
      this.setState({
        legumes: [
          ...legumes,
          {
            nome: nome_legme,
            url: imagem_legume,
          },
        ],
      });
    }

    this.setState({
      nome_legme: "",
      imagem_legume: "",
    });
  };

  deletar = (index) => {
    const { legumes } = this.state;
    this.setState({
      legumes: legumes.filter((l, i) => i !== index),
    });
  };

  render() {
    const { legumes, nome_legme, imagem_legume, editando, index_editando } =
      this.state;
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
            <div className="bloco">
              <h2>
                {editando
                  ? `Editando:${legumes[index_editando].nome}`
                  : "cadastre um novo legume"}
              </h2>
              <form onSubmit={this.onSubmit}>
                <input
                  placeholder="Nome"
                  value={nome_legme}
                  onChange={(e) => {
                    this.setState({
                      nome_legme: e.target.value,
                    });
                  }}
                />
                <br />
                <input
                  placeholder="Url da Imagem"
                  value={imagem_legume}
                  onChange={(e) => {
                    this.setState({
                      imagem_legume: e.target.value,
                    });
                  }}
                />
                <br />
                <button className="botao" type="submit">Salvar</button>
              </form>
            </div>
            <hr />
          </div>
          <div className="dados">
            <Vendedor/>
            <div className="corpo">
              <span className="titulo">Legumes</span>
              <ul>
                {legumes.map((l, index) => (
                  <li key={l.id}>
                    <h3>{l.nome}</h3>
                    <img src={l.url} alt={l.nome} />
                    <br />
                    <div className="button">
                      <button className="botao" onClick={() => this.deletar(index)}>Comprar</button>
                      <br/>
                      <button className="botao"
                        onClick={() => {
                          this.setState({
                            editando: true,
                            index_editando: index,
                            nome_legme: l.nome,
                            imagem_legume: l.url,
                          });
                        }}
                      >
                        Mudar anuncio
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <br/>
              <Link to="/" className="link">Pagina inicial</Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}





