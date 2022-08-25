import React from 'react'

function Filter(props) {
  return (
    <button>Filter{ props.type && ` ${props.type}` }</button>
  )
}

export default Filter