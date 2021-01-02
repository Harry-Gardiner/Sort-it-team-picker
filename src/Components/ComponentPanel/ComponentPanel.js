// imports
import AddPlayer from '../PlayerInput'
import PlayerList from '../PlayerList'
import NumberOfPlayers from '../NumberOfPlayers';
import TeamsConfirmed from '../TeamsConfirmed';

// Top component
const ComponentPanel = ({ teamsPicked }) => {
    return (
        <>
            { !teamsPicked ?
                // If teams are not yet picked render initial selection page - number of players per team, input players, create random teams, create balanced teams 
                <>
                    <NumberOfPlayers />
                    <AddPlayer />
                    <PlayerList />
                </> :
                // If teams are picked render team customisation page - kit, team name, home/away
                <>
                    <TeamsConfirmed />
                </>
            }
        </>
    );
};

export default ComponentPanel;
