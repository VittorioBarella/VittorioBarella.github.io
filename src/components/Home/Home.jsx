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
                <h2>A little about myself</h2>
                <p>
                  I am a front-end developer currently living in Gravataí, Rio
                  Grande do Sul.
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
                    I'm currently working as a front end developer at CWI
                    company in an international.
                  </p>
                  <div className='row'>
                    <div class='col-lg-6'>
                      <ul>
                        <li>
                          <strong>Birthday:</strong>
                          <span>January twenty-six, 1995</span>
                        </li>
                        <li>
                          <strong>Phone number:</strong>{' '}
                          <span>55-51-992458071</span>
                        </li>
                        <li>
                          <strong>City:</strong>
                          <span>Gravataí, Rio Grande do Sul</span>
                        </li>
                      </ul>
                    </div>
                    <div className='col-lg-6'>
                      <ul>
                        <li>
                          <strong>Age:</strong> <span>26</span>
                        </li>
                        <li>
                          <strong>Email:</strong>
                          <span>vittorio.br@hotmail.com</span>
                        </li>
                        <li>
                          <strong>Studying:</strong>
                          <span>
                            Technologist in Systems Analysis and Development
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    My goal is to work in the United States, if possible in the
                    future to move there and become a front end specialist. I
                    like to create pages, seek references and be aware of new
                    ones technologies. When I'm not working or studying you will
                    find me playing guitar or training muay thai.
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
