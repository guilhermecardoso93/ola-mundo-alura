import CirculoBanner from "../../assets/circulo_colorido.png";

import "./styles.css";

export function Banner() {
  const minhaFoto = "https://github.com/guilhermecardoso93.png";

  return (
    <div className="banner">
      <div className="apresentacao">
        <h1 className="titulo">Olá Mundo!</h1>
        <h1 className="titulo">Olá Mundo!</h1>

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
