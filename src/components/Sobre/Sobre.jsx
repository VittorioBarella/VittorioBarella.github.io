import React from 'react';
import '../Sobre/style.css';
import Vittorio_3 from '../../assets/img/Vittorio_3.jpg';
import Vittorio_Galeria_1 from '../../assets/img/Vittorio_Galeria_1.png';
import Vittorio_Galeria_2 from '../../assets/img/Vittorio_Galeria_2.png';
import Vittorio_Galeria_3 from '../../assets/img/Vittorio_Galeria_3.jpg';
import Vittorio_Galeria_4 from '../../assets/img/Vittorio_Galeria_4.jpg';
import Vittorio_Galeria_5 from '../../assets/img/Vittorio_Galeria_5.png';
import Vittorio_Galeria_6 from '../../assets/img/Vittorio_Galeria_6.jpg';
import Vittorio_Galeria_7 from '../../assets/img/Vittorio_Galeria_7.jpg';
import Vittorio_Galeria_8 from '../../assets/img/Vittorio_Galeria_8.jpg';
function Sobre() {
  return (
    <>
      <div className='container-fluid fadeIn'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              className='img-fluid sobreVittorio mt-3'
              src={Vittorio_3}
              alt='Vittório de Andrade Barella'
              title='Vittório de Andrade Barella'
            />
          </div>
          <div className='col-md-8 mt-3'>
            <h4>About</h4>
            <h1>Vittório de Andrade Barella</h1>
            <p>
              I am a student of Systems Analysis and Development at Unisinos
              College of Porto Alegre, and my goal is to become a front end
              specialist.
            </p>
            <p>
              I started working in 2015 as an intern at the union of the
              teachers from Rio Grande do Sul, I was a front-end developer there
              and had the opportunity to maintain three sites. Working with PHP
              and ASP languages, I also see html, css, bootstrap and WordPress.
            </p>
            <p>
              Completing 2 years I went to the ADP company. At the ADP company I
              also worked as a front-end intern and had the opportunity to use
              the React.js and Node.js languages giving maintenance on the
              company's application. I currently work as a front end developer
              at CWI company in Porto Alegre, Brazil.
            </p>
          </div>
        </div>
        <div class='header'>
          <h1>Photo gallery</h1>
          <p>A little bit of what I like to do.</p>
        </div>

        <div class='row grid-photos'>
          <div class='column'>
            <img src={Vittorio_Galeria_1} alt='Vittório de Andrade Barella' />
            <img src={Vittorio_Galeria_2} alt='Vittório de Andrade Barella' />
          </div>
          <div class='column'>
            <img src={Vittorio_Galeria_3} alt='Vittório de Andrade Barella' />
            <img src={Vittorio_Galeria_4} alt='Vittório de Andrade Barella' />
          </div>
          <div class='column'>
            <img src={Vittorio_Galeria_5} alt='Vittório de Andrade Barella' />
            <img src={Vittorio_Galeria_6} alt='Vittório de Andrade Barella' />
          </div>
          <div class='column'>
            <img src={Vittorio_Galeria_7} alt='Vittório de Andrade Barella' />
            <img src={Vittorio_Galeria_8} alt='Vittório de Andrade Barella' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
