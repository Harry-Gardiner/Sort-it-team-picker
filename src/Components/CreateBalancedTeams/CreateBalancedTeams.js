const CreateBalancedTeams = ({ handleClick, requiredNumOfPlayers, teamsPicked }) => {
    return (
        <button
            disabled={requiredNumOfPlayers ? false : true}
            onClick={handleClick}
            // style={{ visibility: teamsPicked ? "hidden" : "visible" }}
            className={requiredNumOfPlayers ? null : "button-disabled"}
        >
            Create Balanced Teams
        </button>
    )
}

export default CreateBalancedTeams;