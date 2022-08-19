import { useState } from "react"

const ReservationForm = () => {
    const [arriveDate, setArriveDate] = useState('')
    const [departDate, setDepartDate] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkedin, setCheckedin] = useState('')

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
    }

    return (
        <form className="create">
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

            {/* Replace button with component? */}
            <button>Add reservation</button>
        </form>
    )
}