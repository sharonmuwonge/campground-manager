import { useState } from 'react'

const SelectedDate = ({dateChange}) => {

    const getToday = () => {
      return new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0,10)
    }

    const [date] = useState(getToday());

    return (
        <form action="">
                <label htmlFor="selectedDate">Date:</label>
            <input size='sm' type="date" defaultValue={date} name="selectedDate" id="selectedDate"  onChange={dateChange} /> 
        </form>
    )
}

export default SelectedDate