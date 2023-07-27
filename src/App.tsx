
import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

function App() {
  const { games, addGame, removeGame} = useGameCollection()

  return (
  <div id="app">
    <h1>Games Library</h1>
    <NewGameForm addGame={addGame}></NewGameForm>
    <div className="games">
      {games.length > 0 ? games.map((game)=>(
        <Game key={game.id} title={game.title} cover={game.cover} onremove={() => removeGame(game.id)} description={game.description} id={0}></Game>
    )) : (
      <h2 style={{margin: '30px', width:'100%'}}>Biblioteca vazia, tente adicionar novos jogos...</h2>
    )}
    </div>
  </div>

  )
}

export default App
