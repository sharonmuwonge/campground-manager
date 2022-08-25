import React from 'react'

function Save(props) {
  return (
    <button>Save{ props.type && ` ${props.type}` }</button>
  )
}

export default Save