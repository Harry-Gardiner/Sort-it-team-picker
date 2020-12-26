export const addPlayer = data => {
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

export const reset = () => {
    return {
        type: "RESET",
    }
};

export const deletePlayer = (index) => {
    return {
        type: "DELETE_PLAYER",
        index: index,
    }
};