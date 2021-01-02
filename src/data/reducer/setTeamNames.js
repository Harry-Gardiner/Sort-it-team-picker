export const setTeamNames = (state, { teamNames }) => {
    return {
        ...state,
        team1Name: teamNames.team1Name,
        team2Name: teamNames.team2Name,
        teamsConfirmed: true,
    };
};