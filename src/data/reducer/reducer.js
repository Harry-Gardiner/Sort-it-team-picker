// imports
import initial from '../initial';
import { addPlayer } from './addPlayer';
import { checkNumOfPlayers } from './checkNumOfPlayers';
import { createRandomTeams } from './createRandomTeams';
import { deletePlayer } from './deletePlayer';
import { setTeamColour } from './setTeamColour';
import { setNumberOfPlayers } from './setNumberOfPlayers';
import { createBalancedTeams } from './createBalancedTeams';
import { toggleHomeTeam } from './toggleHomeTeam';
import { setTeamNames } from './setTeamNames';
import { setBookiesFavourtire } from './setBookiesFavourtire';
import { toggleInstructions } from './toggleInstructions';

// Main reducer 
const reducer = (state, action) => {
    switch (action.type) {
        // cases
        case "ADD_PLAYER": return checkNumOfPlayers(addPlayer(state, action));
        case "CREATE_TEAMS": return createRandomTeams(state);
        case "DELETE_PLAYER": return deletePlayer(state, action);
        case "SET_COLOUR": return setTeamColour(state, action);
        case "SET_NUMBER_OF_PLAYERS": return setNumberOfPlayers(state, action);
        case "CREATE_BALANCED_TEAMS": return createBalancedTeams(state);
        case "TOGGLE_HOME_BUTTONS": return toggleHomeTeam(state);
        case "SET_TEAM_NAMES": return setTeamNames(state, action);
        case "CREATE_BOOKIES_FAVOURITE": return setBookiesFavourtire(state);
        case "TOGGLE_INSTRUCTIONS": return toggleInstructions(state);
        case "RESET": return initial;
        // default
        default: return state;
    };
};

export default reducer;