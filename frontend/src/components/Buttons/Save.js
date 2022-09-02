import React from 'react'
import { Button } from '@chakra-ui/react'

function Save({formType, addClick}) {
  return (
    <Button type='submit' onClick={addClick} form='reservationForm'>Save{ formType && ` ${formType}` }</Button>
  )
}

export default Save