// Take a team array and get back combined skill score
export const getTeamSkill = (teamArray) => {
    // get array of players skill
    const arrayOfTeamSkills = teamArray.map((player) => {
        return player.skill
    });

    // return team skill total
    return arrayOfTeamSkills.reduce((acc, skill) => {
        return acc + skill
    });
};

// Add home advantage to team total skill
export const calculateHomeAdvantage = (teamSkillTotal) => {
    // home team skill is given + 20% advantage
    teamSkillTotal = (teamSkillTotal *= 1.20).toFixed(1);
    return teamSkillTotal;
};

// Returns teamScores to be used throughout the app, home advantage is applied
export const getScores = (team1Home, playersTeam1, playersTeam2) => {
    // get teams total skill
    let team1Skill = getTeamSkill(playersTeam1);
    let team2Skill = getTeamSkill(playersTeam2);

    // apply home advantage, varies depending on state of team1Home
    if (team1Home === true) {
        team1Skill = calculateHomeAdvantage(team1Skill);
    } else {
        team2Skill = calculateHomeAdvantage(team2Skill);
    };

    // return object containing team skill with advantage applied
    return {
        team1Skill,
        team2Skill,
    };
};

// takes an object - team skill passed through getScores()
export const setFavouriteTeam = (teamSkills) => {
    // returns
    return teamSkills.team1Skill > teamSkills.team2Skill ? "team1" : "team2";
};


//testing
// const testarray1 = [{ name: "Bom", skill: 2 }, { name: "Lom", skill: 5 }, { name: "Kom", skill: 5 }, { name: "Rom", skill: 4 }, { name: "Com", skill: 4 }, { name: "Jom", skill: 3 }, { name: "Tom", skill: 3 }, { name: "Jim", skill: 2 }]
// const testarray2 = [{ name: "Bom", skill: 2 }, { name: "Lom", skill: 5 }, { name: "Kom", skill: 5 }, { name: "Rom", skill: 4 }, { name: "Com", skill: 5 }, { name: "Jom", skill: 3 }, { name: "Tom", skill: 3 }, { name: "Jim", skill: 5 }]
// const team1Home = false;
// const scores = getScores(team1Home, testarray1, testarray2);
// console.log(getScores(team1Home, testarray1, testarray2));
// const scores = { team1Skill: 200, team2Skill: 100 };
// console.log(setFavouriteTeam(scores));
//console.log(calculateHomeAdvantage(11));