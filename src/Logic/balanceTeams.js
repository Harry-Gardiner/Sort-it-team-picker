const balanceTeams = (playersArray) => {
    // sort array on skill, highest to lowest
    const balancedArray = playersArray.sort((a, b) => b.skill - a.skill);

    return balancedArray;
}

//test
// const testarray = [{ name: "Bom", skill: 2 }, { name: "Lom", skill: 5 }, { name: "Kom", skill: 5 }, { name: "Rom", skill: 4 }, { name: "Com", skill: 4 }, { name: "Jom", skill: 3 }, { name: "Tom", skill: 3 }, { name: "Jim", skill: 2 }]

// console.log(balanceTeams(testarray));