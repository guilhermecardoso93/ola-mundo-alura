import { DefaultPost } from "../../components/DefaultPost";

export function AboutMe() {
  const fotoCapa = `../../assets/sobre_mim_capa.png`;

  return (
    <main>
      <DefaultPost fotoCapa={fotoCapa} titulo="Sobre Mim">
        <h3 className="subtitulo">
          fjgdjfgdfjsglkçjsfdgjlk
        </h3>
      </DefaultPost>
    </main>
  );
}
