
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
      {games.map((game)=>(
        <Game key={game.id} title={game.title} cover={game.cover} onremove={() => removeGame(game.id)} description={game.description} id={0}></Game>
      ))}
    </div>
  </div>

  )
}

export default App
