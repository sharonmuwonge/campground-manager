import { useState } from 'react'

const SelectedDate = ({dateChange}) => {

    const todayISO = () => {
        let today = new Date()
        return today.toISOString().slice(0,10)
    }
    

    const [date] = useState(todayISO());
    
    const preventKeyDown = (e) => {
        e.preventDefault()
    }

    return (
        <form action="">
                <label htmlFor="selectedDate">Date:</label>
            <input size='sm' type="date" defaultValue={date} name="selectedDate" id="selectedDate" onKeyDown={preventKeyDown} onChange={dateChange} /> 
        </form>
    )
}

export default SelectedDate