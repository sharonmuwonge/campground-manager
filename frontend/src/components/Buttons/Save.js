import React from 'react'
import { Button } from '@chakra-ui/react'

function Save({formType}) {
  return (
    <Button size='sm' type='submit'>Save{ formType && ` ${formType}` }</Button>
  )
}

export default Save