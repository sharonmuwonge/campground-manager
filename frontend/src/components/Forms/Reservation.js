import { useState } from "react"
import Add from "../Buttons/Add"

const ReservationForm = () => {
    const [arriveDate, setArriveDate] = useState('')
    const [departDate, setDepartDate] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkedin, setCheckedin] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const reservation = {arriveDate, departDate, firstName, lastName, checkedin}

        const response = await fetch('reservations', {
            method: 'POST',
            body: JSON.stringify(reservation),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setArriveDate('')
            setDepartDate('')
            setFirstName('')
            setLastName('')
            setCheckedin('')
            
            setError(null)
            console.log('New reservation added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h2>Add new reservation</h2>

            <label>First name:</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />

            <label>Last name:</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            
            <label>Arrival date:</label>
            <input type="date" onChange={(e) => setArriveDate(e.target.value)} value={arriveDate} />

            <label>Departure date:</label>
            <input type="date" onChange={(e) => setDepartDate(e.target.value)} value={departDate} />

            <label>Checked in:</label>
            <input type="boolean" onChange={(e) => setCheckedin(e.target.value)} value={checkedin} />

            <Add/>

            {error && <p className="error">{error}</p>}
        </form>
    )
}

export default ReservationForm