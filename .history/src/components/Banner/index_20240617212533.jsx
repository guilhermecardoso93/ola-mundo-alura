import CirculoBanner from "../../assets/circulo_colorido.png";

import "./styles.css";

export function Banner() {
  const minhaFoto = "https://github.com/guilhermecardoso93.png";

  return (
    <div className="banner">
      <div className="apresentacao">
        <p className="titulo">Olá Mundo!</p>
        <p className="paragrafo">
          Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit
          amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip,
          Lorem ipsum dolor sit amet, consectetur adip
        </p>
      </div>

      <div className="imagens">
        <img
          src={CirculoBanner}
          alt=""
          className="circuloColorido"
          aria-hidden
        />
        <img src={minhaFoto} className="minhaFoto" alt="" />
      </div>
    </div>
  );
}
