import { useState } from "react"
import { GameType } from "../interfaces"
import TextInput from "./TextInput"

export default function newGameForm({addGame}:any){
    const [cover ,setCover] = useState('')
    const [title ,setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    const handleSubmit = (ev:React.FormEvent) =>{
        ev.preventDefault()
        const newGame: GameType = {
            id: 0, title, cover, description,
            onremove: function (): void {
                throw new Error("Function not implemented.")
            }
        }; // Gera um objeto Game com os dados do formulário
        addGame(newGame); // Adiciona o novo jogo à biblioteca
        setTitle('')
        setCover('')
        setDescription('')
      }

    return(
        <form onSubmit={handleSubmit}>
        <TextInput value={title} setvalue={setTitle} label={'Titulo'} id='title'></TextInput>
        <TextInput value={cover} setvalue={setCover} label={'Capa'} id='cover'></TextInput>
        <TextInput value={description} setvalue={setDescription} label={'Descrição'} id='description'></TextInput>
        <button type="submit">Adicionar á Biblioteca</button>
      </form>
    )
}