import "./styles.css";

export function MainButton(props) {
  // eslint-disable-next-line react/prop-types
  return <button className={`botaoPrincipal lg`}>{props.titulo}</button>;
}
