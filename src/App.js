import AddPlayer from './Components/PlayerInput/'
import PlayerList from './Components/PlayerList'
import Team1List from './Components/TeamList/Team1List';
import Team2List from './Components/TeamList/Team2List';
import CreateTeams from './Components/CreateTeams';
import Reset from './Components/Reset';
import Team1Colour from './Components/PickColour/Colour1';
import Team2Colour from './Components/PickColour/Colour2';
// Top component
const App = () => {
  return (
    <>
      <h1>Sorted!</h1>
      <p>5-aside Team Picker</p>
      <AddPlayer />
      <PlayerList />
      <CreateTeams />
      <Team1List teamName="Team 1" />
      <Team1Colour />
      <Team2List teamName="Team 2" />
      <Team2Colour />
      <Reset />
    </>
  )
}

export default App;
