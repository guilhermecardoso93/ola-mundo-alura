import './styles.css'

export function PageNotFound() {
  return (
    <div className='conteudoContainer'>
      <span className='texto-404'>
        404
      </span>

      <h1 className='titulo'>
        Ops! Página não encontrada
      </h1>

      <p>
        Tem certeza de que era isso que você estava procurando?
        Aguarde uns instantes e recarregue a página ou volte para a página inicial.
      </p>

    </div>
  )
}