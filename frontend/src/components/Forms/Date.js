import { FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react'

const SelectedDate = ({dateChange}) => {

    const getToday = () => {
      return new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0,10)
    }

    const [date] = useState(getToday());

    return (
        <form action="">
            <FormLabel htmlFor="selectedDate">Date:</FormLabel>
            <Input size='sm' type="date" defaultValue={date} name="selectedDate" id="selectedDate"  onChange={dateChange} /> 
        </form>
    )
}

export default SelectedDate