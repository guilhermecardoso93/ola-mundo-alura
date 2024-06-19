/* eslint-disable react/prop-types */
import "./styles.css";

export function MainButton(props) {
  return <button 
          className={`botao principal ${[props.tamanho]}`} >
            {props.titulo}
          </button>;
}
