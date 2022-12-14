import React from 'react'
import { Button } from '@chakra-ui/react'

function Edit({type, editClick}) {
  return (
    <Button onClick={editClick}>Edit{ type && ` ${type}` }</Button>
  )
}

export default Edit