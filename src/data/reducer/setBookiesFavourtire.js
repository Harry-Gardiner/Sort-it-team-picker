import { getScores, setFavouriteTeam } from '../../Logic/bookiesFavourite';

export const setBookiesFavourtire = (state) => {
    const { team1Players, team2Players, team1Home } = state;

    let skillScores = getScores(team1Home, team1Players, team2Players);

    let bookiesFavTeam = setFavouriteTeam(skillScores);

    let favTeamSkill = bookiesFavTeam === "team1" ? skillScores.team1Skill : skillScores.team2Skill;

    let otherTeamSkill = bookiesFavTeam === "team1" ? skillScores.team2Skill : skillScores.team1Skill;

    return {
        ...state,
        bookiesFavouriteInfo: {
            bookiesFavTeam,
            favTeamSkill,
            otherTeamSkill,
        },
        showBookiesFavourite: true,
    };
};