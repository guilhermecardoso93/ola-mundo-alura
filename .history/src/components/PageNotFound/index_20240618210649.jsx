import cachorroFoto from "../../assets/erro_404.png";
import { MainButton } from "../MainButton";
import "./styles.css";

export function PageNotFound() {
  return (
    <>
      <div className="conteudoContainer">
        <span className="texto404">404</span>

        <h1 className="titulo">Ops! Página não encontrada</h1>

        <p className="paragrafo">
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className="paragrafo">
          Aguarde uns instantes e recarregue a página ou volte para a página
          inicial.
        </p>
        <div className="botaoContainer">
          <MainButton titulo="Voltar" tamanho="lg" />
        </div>

        <img
          src={cachorroFoto}
          alt="Foto de Cachorro com óculos"
          className="imagemCachorro"
        />
      </div>
      <div className="espacoEmBranco"></div>
    </>
  );
}
