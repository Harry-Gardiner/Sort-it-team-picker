export const addPlayer = (data) => {
    return {
        type: "ADD_PLAYER",
        data: data,
    }
};

export const createTeams = () => {
    return {
        type: "CREATE_TEAMS",
    }
};

export const createBalancedTeams = () => {
    return {
        type: "CREATE_BALANCED_TEAMS",
    }
};

export const reset = () => {
    return {
        type: "RESET",
    }
};

export const deletePlayer = (data) => {
    return {
        type: "DELETE_PLAYER",
        index: data,
    }
};

export const setColour1 = (data) => {
    return {
        type: "SET_COLOUR",
        colour: data,
        team: 1,
    }
};

export const setColour2 = (data) => {
    return {
        type: "SET_COLOUR",
        colour: data,
        team: 2,
    }
};

export const setNumber = (data) => {
    return {
        type: "SET_NUMBER_OF_PLAYERS",
        value: data,
    }
};

export const toggleHomeTeam = () => {
    return {
        type: "TOGGLE_HOME_BUTTONS"
    }
};

export const setTeamName = (data) => {
    return {
        type: "SET_TEAM_NAMES",
        teamNames: data,
    }
};

export const createBookiesFavourite = () => {
    return {
        type: "CREATE_BOOKIES_FAVOURITE",
    }
}