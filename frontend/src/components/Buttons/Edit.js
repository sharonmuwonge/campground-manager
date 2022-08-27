import React from 'react'

function Edit({type, editClick}) {
  return (
    <button onClick={editClick}>Edit{ type && ` ${type}` }</button>
  )
}

export default Edit