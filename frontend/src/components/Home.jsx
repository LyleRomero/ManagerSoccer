import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div>
      <div class="promotion">
        <div class="shade"></div>
        <div class="promo-detail cycle-overlay">
          <div class="promo-text">
              <span class="dash"></span>
              <a href="#" class="copy">
                <div class="headline">Bienvenido GolMin</div>
                <p class="body long">Gestion de torneos nivel profesional</p>
              </a>
              <div class="buttons">
                <Link to="/login" className="button" style={{ marginRight: '20px' }}>Ingresa</Link>
                <Link to="/#" className="button" style={{ marginLeft: '20px' }}>Estadisticas</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;