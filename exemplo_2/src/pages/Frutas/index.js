import React from "react";
import { Link } from 'react-router-dom';
import Vendedor from "../../vendedor"
import Header from "../../header"


export default class Frutas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frutas: [
        {
          id: 1,
          nome: "Banana",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_OgiVxWUIR90SucMSN6vPvNFbP6MZ7gP-A&usqp=CAU",
          valor:"R$2,10"
        },

        {
          id: 2,
          nome: "Abacate",
          url: "https://static.tuasaude.com/media/article/gl/lo/beneficios-do-abacate_13382_l.webp",
          valor:"R$4,20"
        },

        {
          id: 3,
          nome: "Manga",
          url: "https://saberhortifruti.com.br/wp-content/uploads/2020/05/manga-tipo-rosa.jpg",
          valor:"R$3,30"
        },

        {
          id: 4,
          nome: "Maçã",
          url: "https://www.anad.org.br/wp-content/uploads/2018/05/beneficios-da-maca.jpg",
          valor:"R$2,80"
        },

        {
          id: 5,
          nome: "Uva",
          url: "https://diariodocomercio.com.br/wp-content/uploads/2018/08/Uvas.jpg",
          valor:"R$10,00"
        },

        {
          id: 6,
          nome: "Damasco",
          url: "https://melhorcomsaude.com.br/wp-content/uploads/2018/08/descubra-os-incriveis-beneficios-do-damasco-500x334.jpg",
          valor:"R$9,00"
        },
      ],
      nome_fruta: "",
      imagem_fruta: "",
      valor_fruta:"",
      editando: false,
      index_editando: null,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { frutas, editando, index_editando, nome_fruta, imagem_fruta, valor_fruta } =
      this.state;

    if (editando) {
      const fruta_atualizada = frutas.map((f, index) => {
        if (index_editando === index) {
          f.nome = nome_fruta;
          f.url = imagem_fruta;
          f.valor = valor_fruta;
        }

        return f;
      });

      this.setState({
        frutas: fruta_atualizada,
        index_editando: null,
        editando: false,
      });
    } else {
      this.setState({
        frutas: [
          ...frutas,
          {
            nome: nome_fruta,
            url: imagem_fruta,
            valor: valor_fruta,
          },
        ],
      });
    }

    this.setState({
      nome_fruta: "",
      imagem_fruta: "",
      valor_fruta : "",
      
    });
  };

  deletar = (index) => {
    const { frutas } = this.state;
    this.setState({
      frutas: frutas.filter((f, i) => i !== index),
    });
  };

  render() {
    const { frutas, editando, index_editando, nome_fruta, imagem_fruta, valor_fruta} =
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
                  ? `Editando:${frutas[index_editando].nome}`
                  : "cadastre um novo legume"}
              </h2>
              <form onSubmit={this.onSubmit} className="form">
                <input
                  placeholder="Nome"
                  value={nome_fruta}
                  onChange={(e) => {
                    this.setState({
                      nome_fruta: e.target.value,
                    });
                  }}
                />
                <input
                  placeholder="Url da Imagem"
                  value={imagem_fruta}
                  onChange={(e) => {
                    this.setState({
                      imagem_fruta: e.target.value,
                    });
                  }}
                />
                <input
                  type="number"
                  placeholder="valor"
                  value={valor_fruta}
                  onChange={(e) => {
                    this.setState({
                      valor_fruta: e.target.value,
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
              <span className="titulo">Frutas</span>
              <ul>
                {frutas.map((f, index) => (
                  <li key={f.id}>
                    <h3>{f.nome}</h3>
                    <img src={f.url} alt={f.nome} />
                    <p><b>{f.valor}</b></p>
                    <br />
                    <div className="button">
                      <button className="botao" onClick={() => this.deletar(index)}>comprar</button>
                      <br/>
                      <button className="botao"
                        onClick={() => {
                          this.setState({
                            editando: true,
                            index_editando: index,
                            nome_fruta: f.nome,
                            imagem_fruta: f.url,
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





