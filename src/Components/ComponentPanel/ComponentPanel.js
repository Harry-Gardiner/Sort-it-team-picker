import AddPlayer from '../PlayerInput'
import PlayerList from '../PlayerList'
import Team1List from '../TeamList/Team1List';
import Team2List from '../TeamList/Team2List';
import CreateTeams from '../CreateTeams';
import CreateBalancedTeams from '../CreateBalancedTeams';
import Team1Colour from '../PickColour/Colour1';
import Team2Colour from '../PickColour/Colour2';
import Team1Jersey from '../TeamJersey/Team1Jersey';
import Team2Jersey from '../TeamJersey/Team2Jersey';
import NumberOfPlayers from '../NumberOfPlayers';
// import HomeButton1 from '../HomeTeam/Team1Button';
// import HomeButton2 from '../HomeTeam/Team2Button';
import InputTeamNames from '../TeamNameInput';
import BookiesFavourite from '../BookiesFavourite';

// Top component
const ComponentPanel = ({ teamsPicked }) => {
    return (
        <main>
            { !teamsPicked ?
                <>
                    <NumberOfPlayers />
                    <InputTeamNames />
                    {/* <HomeButton1 />
                    <HomeButton2 /> */}
                    <AddPlayer />
                    <PlayerList />
                    <CreateTeams />
                    <CreateBalancedTeams />
                </> :
                <>
                    <Team1List />
                    <Team1Jersey />
                    <Team1Colour />
                    <Team2List />
                    <Team2Jersey />
                    <Team2Colour />
                    <BookiesFavourite />
                </>
            }
        </main>
    )
}

export default ComponentPanel;
