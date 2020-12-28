const NumberOfPlayers = ({ numberOfPlayers, handleAdd, handleMinus }) => {
    return (
        <div>
            <p>Set team size:</p>

            <p>{numberOfPlayers}-aside Team Picker</p>

            <button
                onClick={handleAdd}
            >
                +
            </button>

            <button
                onClick={handleMinus}
                disabled={numberOfPlayers <= 2} // cant go below 2-aside, i.e. 4 players in total
            >
                -
            </button>
        </div>
    )
}

export default NumberOfPlayers