import { GameType } from "../interfaces";


export default function Game({title,cover,description,onremove}:GameType){

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