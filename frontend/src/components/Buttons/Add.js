import React from 'react'

function Add({formType}) {
  return (
    <button type={'submit'} form={'reservationForm'} >Add{ formType && ` ${formType}` }</button>
   )
}

export default Add
