import React from 'react'

function Add(props) {
  return (
    <button>Add{props.type}</button>
    // Style buttons flex: space-around so that theres spacing between 'add' and the prop
  )
}

export default Add
