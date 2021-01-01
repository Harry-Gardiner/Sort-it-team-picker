const CreateTeams = ({ handleClick, requiredNumOfPlayers, teamsPicked }) => {
    return (
        <button
            disabled={requiredNumOfPlayers ? false : true}
            onClick={handleClick}
            // style={{ visibility: teamsPicked ? "hidden" : "visible" }}
            className={requiredNumOfPlayers ? null : "button-disabled"}
        >
            Create Random Teams
        </button>
    )
}

export default CreateTeams;