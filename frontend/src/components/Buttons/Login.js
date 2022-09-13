import React from 'react'
import { Button } from '@chakra-ui/react'

function Login({formName}) {
  return (
    <Button size='sm' type='submit' form={formName} >Log in</Button>
  )
}

export default Login