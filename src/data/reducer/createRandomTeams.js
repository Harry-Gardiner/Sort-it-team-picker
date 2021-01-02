import { randomiseArray, generateTeams } from '../../Logic/generateTeams';
export const createRandomTeams = (state) => {
    const players = state.players;
    // run players array through logic to randomise and split into 2 teams
    const teams = generateTeams(randomiseArray(players));

    return {
        ...state,
        team1Players: teams[0],
        team2Players: teams[1],
        teamsPicked: true,
    };
};