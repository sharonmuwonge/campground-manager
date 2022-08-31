import React from 'react'

function Save({formType}) {
  return (
    <button>Save{ formType && ` ${formType}` }</button>
  )
}

export default Save