import { generateTeams, balanceTeams } from '../../Logic/generateTeams';

export const createBalancedTeams = (state) => {
    const players = state.players;
    // sort array based on skill highest to lowest then split array
    const teams = generateTeams(balanceTeams(players));

    return {
        ...state,
        team1Players: teams[0],
        team2Players: teams[1],
        teamsPicked: true,
    };
};