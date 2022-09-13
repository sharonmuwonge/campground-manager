import { ReservationsContext } from "../context/ReservationsContext"
import { useContext } from "react"

export const useReservationsContext = () => {
    const context = useContext(ReservationsContext)

    if (!context) {
        throw Error('useReservationsContext must be used inside a ReservationsContextProvider')
    }
 
    return context
}