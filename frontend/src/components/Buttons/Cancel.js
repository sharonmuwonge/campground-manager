import React from 'react'

function Cancel({formType, cancelClick}) {
  return (
    <button onClick={cancelClick}>Cancel{ formType && ` ${formType}` }</button>
  )
}

export default Cancel