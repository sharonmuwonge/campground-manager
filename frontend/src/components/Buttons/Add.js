import React from 'react'

function Add({formType, addClick}) {
  return (
    <button type={'submit'} form={'reservationForm'} onClick={addClick}>Add{ formType && ` ${formType}` }</button>
   )
}

export default Add
