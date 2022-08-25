import React from 'react'

function Edit(props) {
  return (
    <button>Edit{ props.type && ` ${props.type}` }</button>
  )
}

export default Edit