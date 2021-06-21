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
            <h4>Sobre</h4>
            <h1>Vittório de Andrade Barella</h1>
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas na
              Faculdade Unisinos de Porto Alegre, tenho como objetivo de entrar
              no mercado de trabalho com desenvolvedor front-end.
            </p>
            <p>
              Comecei a trabalhar no ano de 2015 como estagiário no sindicato
              dos professores do Rio Grande do Sul, lá fui desenvolvedor
              front-end e tive a oportunidade de dar manutenção em três sites.
              Trabalhando com as linguagens de PHP e ASP, vendo também html,css,
              bootstrap e WordPress.
            </p>
            <p>
              Completando os 2 anos segui para a empresa ADP. Na empresa ADP
              também trabalhei como estagiário de front-end e tive a
              oportunidade de usar as linguagens de React.js e Node.js dando
              manutenção na aplicação da empresa. Sigo os estudos, tendo me
              aprimorar cada vez mais e continuo na busca da efetivação como
              desenvolvedor front-end.
            </p>
          </div>
        </div>
        <div class='header'>
          <h1>Galeria de Fotos</h1>
          <p>Um pouco do que gosto de fazer.</p>
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
