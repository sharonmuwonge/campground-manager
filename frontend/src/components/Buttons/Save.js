import React from 'react'
import { Button } from '@chakra-ui/react'

function Save({formType, addClick, formName}) {
  return (
    <Button type='submit' onClick={addClick} form={formName} >Save{ formType && ` ${formType}` }</Button>
  )
}

export default Save