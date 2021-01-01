const NumberOfPlayers = ({ numberOfPlayers, handleAdd, handleMinus }) => {
    return (
        <div className="card">
            <h3>Set team size:</h3>


            <button
                onClick={handleAdd}
            >
                +
            </button>

            <p>{numberOfPlayers}</p>

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