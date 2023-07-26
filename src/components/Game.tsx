import { Game } from "../interfaces";


export default function Game({title,cover,description,onremove}:Game){

    return (
        <div>
          <img src={cover} alt="" />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onremove}>Remover</button>

          </div>
        </div>
    )
}