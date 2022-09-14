import React from 'react'
import { Button } from '@chakra-ui/react'

function SignIn({formName}) {
  return (
    <Button size='sm' type='submit' form={formName} >Sign in</Button>
  )
}

export default SignIn