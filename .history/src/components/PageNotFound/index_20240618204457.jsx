import cachorroFoto from '../../assets/erro_404.png'
import "./styles.css";

export function PageNotFound() {
  return (
    <div className="conteudoContainer">
      <span className="texto-404">404</span>

      <h1 className="titulo">Ops! Página não encontrada</h1>

      <p className="paragrafo">
        Tem certeza de que era isso que você estava procurando?
      </p>
      <p className="paragrafo">
        Aguarde uns instantes e recarregue a página ou volte para a página
        inicial.
      </p>
      <div className="botaoContainer">
        <button>Voltar</button>
      </div>

      <img src={cachorroFoto} alt='' className=""/>
    </div>
  );
}
