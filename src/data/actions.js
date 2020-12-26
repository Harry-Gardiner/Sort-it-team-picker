export const addPlayer = data => {
    return {
        type: "ADD_PLAYER",
        data: data,
    }
}

export const createTeams = () => {
    return {
        type: "CREATE_TEAMS",
    }
}