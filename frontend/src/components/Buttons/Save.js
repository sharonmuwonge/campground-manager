import React from 'react'
import { Button } from '@chakra-ui/react'

function Save({formType, saveClick, formName}) {
  return (
    <Button type='submit' onClick={saveClick} form={formName} >Save{ formType && ` ${formType}` }</Button>
  )
}

export default Save