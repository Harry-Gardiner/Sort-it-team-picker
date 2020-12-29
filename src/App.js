import AddPlayer from './Components/PlayerInput/'
import PlayerList from './Components/PlayerList'
import Team1List from './Components/TeamList/Team1List';
import Team2List from './Components/TeamList/Team2List';
import CreateTeams from './Components/CreateTeams';
import CreateBalancedTeams from './Components/CreateBalancedTeams';
import Reset from './Components/Reset';
import Team1Colour from './Components/PickColour/Colour1';
import Team2Colour from './Components/PickColour/Colour2';
import Team1Jersey from './Components/TeamJersey/Team1Jersey';
import Team2Jersey from './Components/TeamJersey/Team2Jersey';
import NumberOfPlayers from './Components/NumberOfPlayers';
// Top component
const App = () => {
  return (
    <>
      <h1>Sorted!</h1>
      <NumberOfPlayers />
      <AddPlayer />
      <PlayerList />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <CreateTeams />
        <CreateBalancedTeams />
      </div>
      <Team1List teamName="Team 1" />
      <Team1Jersey />
      <Team1Colour />
      <Team2List teamName="Team 2" />
      <Team2Jersey />
      <Team2Colour />
      <Reset />
    </>
  )
}

export default App;
