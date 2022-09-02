import React from 'react'
import { Button } from '@chakra-ui/react'

function Filter(props) {
  return (
    <Button size='sm'>Filter{ props.type && ` ${props.type}` }</Button>
  )
}

export default Filter