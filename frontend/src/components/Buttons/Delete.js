import React from 'react'

function Delete(props) {
  return (
    <button>Delete{ props.type && ` ${props.type}` }</button>
  )
}

export default Delete