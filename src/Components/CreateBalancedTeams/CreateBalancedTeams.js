const CreateBalancedTeams = ({ handleClick, requiredNumOfPlayers, teamsPicked }) => {
    return (
        <button
            disabled={requiredNumOfPlayers ? false : true}
            onClick={handleClick}
            style={{ visibility: teamsPicked ? "hidden" : "visible" }}
        >
            Balanced Teams
        </button>
    )
}

export default CreateBalancedTeams;