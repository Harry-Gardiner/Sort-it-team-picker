const NumberOfPlayers = ({ numberOfPlayers, handleAdd, handleMinus }) => {
    return (
        <div className="card teamSize">
            <h3>Set team size</h3>

            <div className="flex">
                <button
                    onClick={handleMinus}
                    disabled={numberOfPlayers <= 2} // cant go below 2-aside, i.e. 4 players in total
                    className="arrow"
                >
                    {'<'}
                </button>

                <p>{numberOfPlayers}</p>

                <button
                    onClick={handleAdd}
                    className="arrow"
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default NumberOfPlayers