import AddPlayer from './Components/PlayerInput/'
import PlayerList from './Components/PlayerList'
// Top component
const App = () => {
  return (
    <>
      <h1>Sorted!</h1>
      <p>5-aside Team Picker</p>
      <AddPlayer />
      <PlayerList />
    </>
  )
}

export default App;
