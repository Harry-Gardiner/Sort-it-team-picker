// imports
import initial from '../initial';
import { randomiseArray } from '../../Logic/randomiseArray';
import { generateTeams } from '../../Logic/generateTeams';



// update functions
const addPlayer = (state, { data }) => {
    return {
        ...state,
        players: [...state.players, { name: data.playerName }]
    }
}

const checkNumOfPlayers = (state) => {
    const numOfPlayers = state.players.length;

    const matchesRequired = numOfPlayers === 10; // bool value

    return {
        ...state,
        requiredNumOfPlayers: matchesRequired,
    }
}

const createRandomTeams = (state) => {
    const players = state.players;

    // run players array through logic to randomise and split into 2 teams
    const teams = generateTeams(randomiseArray(players));

    return {
        ...state,
        team1Players: teams[0],
        team2Players: teams[1],
        teamsPicked: true,
    }
}

const deletePlayer = (state, action) => {
    // get player index
    const playerToDelete = action.index;
    // get players array from state
    let playersArray = state.players

    // filter out player to delete
    playersArray = playersArray.filter((player, index) => index !== playerToDelete)

    // Check if enough players have been added
    const checkEnoughPlayers = playersArray.length === state.numberOfPlayers ? true : false;

    return {
        ...state,
        players: playersArray,
        requiredNumOfPlayers: checkEnoughPlayers,
    }
}

const setTeamColour = (state, { colour, team }) => {
    // set team colours based on team value passed in. If no value colour remains current state    
    return {
        ...state,
        team1Colour: team === 1 ? colour : state.team1Colour,
        team2Colour: team === 2 ? colour : state.team2Colour,
    }
}

const setNumberOfPlayers = (state, { value }) => {
    return {
        ...state,
        numberOfPlayers: state.numberOfPlayers + value,
    }
}

// Main reducer 
const reducer = (state, action) => {
    switch (action.type) {
        // cases
        case "ADD_PLAYER": return checkNumOfPlayers(addPlayer(state, action));
        case "CREATE_TEAMS": return createRandomTeams(state);
        case "DELETE_PLAYER": return deletePlayer(state, action);
        case "SET_COLOUR": return setTeamColour(state, action);
        case "SET_NUMBER_OF_PLAYERS": return setNumberOfPlayers(state, action)
        case "RESET": return initial;
        // default
        default: return state;
    };
};

export default reducer;