const CreateTeams = ({ handleClick, requiredNumOfPlayers }) => {
    return (
        <button
            disabled={requiredNumOfPlayers ? false : true}
            onClick={handleClick}
        >
            Create Teams
        </button>
    )
}

export default CreateTeams;