import React from 'react'

function Cancel(props) {
  return (
    <button>Cancel{ props.type && ` ${props.type}` }</button>
  )
}

export default Cancel