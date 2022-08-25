import { useState } from 'react'

const SelectedDate = ({dateChange}) => {

    const todayISO = () => {
        let today = new Date()
        return today.toISOString().slice(0,10)
    }
    

    const [date] = useState(todayISO());

    return (
        <form action="">
                <label htmlFor="selectedDate">Date:</label>
            <input size='sm' type="date" defaultValue={date} name="selectedDate" id="selectedDate"  onChange={dateChange} /> 
        </form>
    )
}

export default SelectedDate