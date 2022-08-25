const SelectedDate = ({handleThisChange}) => {
    
    const preventKeyDown = (e) => {
        e.preventDefault()
    }

    return (
        <form action="">
                <label htmlFor="selectedDate">Date:</label>
            <input size='sm' type="date" name="selectedDate" id="selectedDate" onKeyDown={preventKeyDown} onChange={handleThisChange} /> 
        </form>
    )
}

export default SelectedDate