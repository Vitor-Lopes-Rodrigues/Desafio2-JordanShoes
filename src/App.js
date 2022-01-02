import banner from './assets/img/banner.png'; 
import './style/App.css';
import shoes from './assets/img/air-jordan-1.png';
import shoes1 from './assets/img/air-jordan-2.png';
import shoes2 from './assets/img/air-jordan-3.png';
import shoes3 from './assets/img/air-jordan-4.png';
import shoes4 from './assets/img/air-jordan-5.png';
import shoes5 from './assets/img/air-jordan-6.png';
import shoes6 from './assets/img/air-jordan-7.png';
import shoes7 from './assets/img/air-jordan-8.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Desconto">
          <p> Ganhe R$ 10,00 de desconto no frete</p>
        </div>
        <div className="Subtitulo">
          <p>JordanShoes</p>
        </div>
      </header>
      <main>
        <div className="Banner">
          <div className="Banner-Back">
            <div className="Text">
          <h1>A melhor loja de Jordan</h1>
          <p>O tênis Jordan é fruto de uma velha e forte<span>parceria entre a Nike e o jogador Michael Jordan.</span></p>
            </div>
          </div>
        </div>

        <div className="Box">
          <div className="Text-Box">
            <h2>Destaques</h2>
            <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
          </div>
          <div className="Container-Shoes">
            <div className="Box-Shoes">
                <img src={shoes} alt="Jordan1"/>
            </div>
            <div className="Box-Shoes">
              <img src={shoes1} alt="Jordan2"/>               
            </div>
            <div className="Box-Shoes">
              <img src={shoes2} alt="Jordan3"/>  
            </div>
            <div className="Box-Shoes">
              <img src={shoes3} alt="Jordan4"/> 
            </div>
            <div className="Box-Shoes">
              <img src={shoes4} alt="Jordan5"/> 
            </div>
            <div className="Box-Shoes">
              <img src={shoes5} alt="Jordan6"/>  
            </div>
            <div className="Box-Shoes">
              <img src={shoes6} alt="Jordan7"/>  
            </div>
            <div className="Box-Shoes">
                <img src={shoes7} alt="Jordan8"/>  
            </div>
          </div>
        </div>
        <div className="Right">
          <h2>Todos os direitos reservados</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
