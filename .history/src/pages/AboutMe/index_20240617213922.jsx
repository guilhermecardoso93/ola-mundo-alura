import { DefaultPost } from "../../components/DefaultPost";

export function AboutMe() {
  const fotoCapa = `../../assets/sobre_mim_capa.png`;
  const minhaFoto = "https://github.com/guilhermecardoso93.png";

  return (
    <main>
      <DefaultPost fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className='subtitulo'>
                Olá, eu sou o Antônio!
            </h3>
            
            <img
                src={minhaFoto}
                alt="Foto do Antônio Evaldo sorrindo"
                className='fotoSobreMim'
            />
      </DefaultPost>
    </main>
  );
}
