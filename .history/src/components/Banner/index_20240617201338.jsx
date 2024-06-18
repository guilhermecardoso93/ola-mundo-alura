import CirculoBanner from '../../assets/circulo_colorido.png'

import "./styles.css";

export function Banner() {
  return (
    <hero className="Banner">
      <div className="apresentacao">
        <h1 className="titulo">Olá Mundo!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip</p>
      </div>

      <div>
        <img src={CirculoBanner} alt='' />
      </div>
    </hero>
  );
}
