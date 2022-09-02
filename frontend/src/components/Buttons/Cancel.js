import React from 'react'
import { Button } from '@chakra-ui/react'

function Cancel({formType, cancelClick}) {
  return (
    <Button onClick={cancelClick} size='sm'>Cancel{ formType && ` ${formType}` }</Button>
  )
}

export default Cancel