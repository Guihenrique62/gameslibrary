import { useState } from "react"
import { GameType } from "./interfaces"
import Game from "./components/Game"



function App() {
  const [title ,setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cover ,setCover] = useState('')
  const [games, setGames] = useState<GameType[]>(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if(!storedGames) return []
    return JSON.parse(storedGames)
    
  })




  const addGame = ({title,cover}:GameType) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover,description}
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const removeGame = (id: number) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib",JSON.stringify(newState))
      return newState
    })
  }

  const handleSubmit = (ev:React.FormEvent) =>{
    ev.preventDefault()
    const newGame: GameType = { id: 0, title, cover,description }; // Gera um objeto Game com os dados do formulário
    addGame(newGame); // Adiciona o novo jogo à biblioteca
    setTitle('')
    setCover('')
    setDescription('')
  }


  return (
  <div id="app">
    <h1>Games Library</h1>
    <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="title">Titulo: </label>
        <input type="text" name="title" id="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="cover">Capa: </label>
        <input type="text" name="cover" id="cover" value={cover} onChange={(e)=> setCover(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="description">description: </label>
        <input type="text" name="description" id="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
      </div>
      <button type="submit">Adicionar á Biblioteca</button>
    </form>

    <div className="games">
      {games.map((game)=>(
        <Game key={game.id} title={game.title} cover={game.cover} onremove={()=> removeGame(game.id)}></Game>
      ))}
    </div>
  </div>

  )
}

export default App
