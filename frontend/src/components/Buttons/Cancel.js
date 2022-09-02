import React from 'react'
import { Button } from '@chakra-ui/react'


function Cancel({formType, cancelClick}) {

  return (
    <Button variant='outline' mr={3} onClick={cancelClick}>Cancel{ formType && ` ${formType}` }</Button>
  )
}

export default Cancel