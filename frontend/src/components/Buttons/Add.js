import React from 'react'
import { Button } from '@chakra-ui/react'

function Add({formType, addClick}) {
  return (
    <Button type={'submit'} form={'reservationForm'} onClick={addClick}>Add{ formType && ` ${formType}` }</Button>
   )
}

export default Add
