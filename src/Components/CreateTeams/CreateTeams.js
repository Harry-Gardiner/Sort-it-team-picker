const CreateTeams = ({ handleClick, requiredNumOfPlayers, teamsPicked }) => {
    return (
        <button
            disabled={requiredNumOfPlayers ? false : true}
            onClick={handleClick}
            style={{ visibility: teamsPicked ? "hidden" : "none" }}
        >
            Create Teams
        </button>
    )
}

export default CreateTeams;