import React from 'react'
import { Button } from '@chakra-ui/react'

function Delete(props) {
  return (
    <Button size='sm'>Delete{ props.type && ` ${props.type}` }</Button>
  )
}

export default Delete