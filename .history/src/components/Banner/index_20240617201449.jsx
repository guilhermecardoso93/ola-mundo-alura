import CirculoBanner from "../../assets/circulo_colorido.png";

import "./styles.css";

export function Banner() {
  return (
    <hero className="Banner">
      <div className="apresentacao">
        <h1 className="titulo">Olá Mundo!</h1>
        <p className="paragrafo">
          Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit
          amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip,
          Lorem ipsum dolor sit amet, consectetur adip
        </p>
      </div>

      <div className="imagens">
        <img src={CirculoBanner} alt="" className="circuloColorido" aria-hidden/>
      </div>
    </hero>
  );
}
