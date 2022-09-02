import React from 'react'
import { Button } from '@chakra-ui/react'

function Add({formType, addClick}) {
  return (
    <Button type={'submit'} form={'reservationForm'} onClick={addClick} size='sm'>Add{ formType && ` ${formType}` }</Button>
   )
}

export default Add
