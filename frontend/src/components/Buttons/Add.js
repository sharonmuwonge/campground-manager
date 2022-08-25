import React from 'react'

function Add(props) {
  return (
    <button>Add{ props.type && ` ${props.type}` }</button>
  )
}

export default Add
