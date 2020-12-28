const NumberOfPlayers = ({ }) => {
    return (
        <div>
            <p>Set team size</p>

            <p>{NumOfPlayers}-aside Team Picker</p>

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