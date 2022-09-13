import React from 'react'
import { Button } from '@chakra-ui/react'

function Add({formType, addClick, formName}) {
  return (
    <Button type={'submit'} form={formName} onClick={addClick}>Add{ formType && ` ${formType}` }</Button>
   )
}

export default Add
