const NumberOfPlayers = ({ numberOfPlayers, handleAdd, handleMinus }) => {
    return (
        <div>
            <p>Set team size</p>

            <p>{numberOfPlayers}-aside Team Picker</p>

            <button
                onClick={handleAdd}
            >
                +
            </button>

            <button
                onClick={handleMinus}
            >
                -
            </button>
        </div>
    )
}

export default NumberOfPlayers