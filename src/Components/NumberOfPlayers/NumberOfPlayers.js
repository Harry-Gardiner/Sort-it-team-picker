const NumberOfPlayers = ({ numberOfPlayers, handleAdd, handleMinus }) => {
    return (
        <div className="card teamSize">
            <h3>Set team size</h3>

            <div className="flex">
                <button
                    onClick={handleMinus}
                    disabled={numberOfPlayers <= 3} // cant go below 3-aside, i.e. 6 players in total
                    className={numberOfPlayers <= 3 ? "arrow button-disabled" : "arrow"}
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