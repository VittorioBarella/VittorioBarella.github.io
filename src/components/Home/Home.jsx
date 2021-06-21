import React, { Component } from 'react';
import '../Home/style.css';
import Vittorio_2 from '../../assets/img/Vittorio_2.jpg';
class Home extends Component {
  render() {
    return (
      <>
        <section
          id='vit'
          className='d-flex flex-column justify-content-center align-items-center fadeIn'
        >
          <div className='vit-container typewriter'>
            <h1>Vittório Andrade</h1>

            <h3>Front-end Developer.</h3>
          </div>
        </section>
        <main id='main'>
          <section id='umPoucoSobreMim' className='umPoucoSobreMim'>
            <div className='container'>
              <div className='section-title mt-3 mb-5'>
                <h2>Um pouco sobre mim</h2>
                <p>
                  Eu sou um desenvolvedor front-end que mora atualmente em
                  Gravataí, Rio Grande do Sul.
                </p>
              </div>

              <div className='row'>
                <div className='col-lg-4' data-aos='fade-right'>
                  <img
                    src={Vittorio_2}
                    className='img-fluid'
                    alt='Vittório de Andrade Barella'
                    title='Vittório de Andrade Barella'
                  />
                </div>
                <div
                  className='col-lg-8 pt-4 pt-lg-0 content'
                  data-aos='fade-left'
                >
                  <h3>Front-end Developer.</h3>
                  <p className='fst-italic'>
                    Em minha última experiência trabalhei com React.js em uma
                    aplicação feita em pwa.
                  </p>
                  <div className='row'>
                    <div class='col-lg-6'>
                      <ul>
                        <li>
                          <strong>Aniversário:</strong>
                          <span>26 de Janeiro de 1995</span>
                        </li>
                        <li>
                          <strong>Telefone:</strong> <span>51-992458071</span>
                        </li>
                        <li>
                          <strong>Cidade:</strong>
                          <span>Gravataí, Rio Grande do Sul</span>
                        </li>
                      </ul>
                    </div>
                    <div className='col-lg-6'>
                      <ul>
                        <li>
                          <strong>Idade:</strong> <span>26</span>
                        </li>
                        <li>
                          <strong>Email:</strong>
                          <span>vittorio.br@hotmail.com</span>
                        </li>
                        <li>
                          <strong>Cursando:</strong>
                          <span>
                            Tecnólogo em Análise e Desenvolvimento de Sistemas
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Tenho como objeto, entrar no mercado de trabalho, na área da
                    tecnologia. Gosto de criar telas, buscar referências e
                    sempre aprender novas tecnologias. Quando não estou
                    trabalhando ou estudando você vai me encontrar tocando
                    violão ou treinando Muay thai.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
