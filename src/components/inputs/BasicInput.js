import React from 'react'

const BasicInput = (props) => {
  return(
    <div>
      <small>{props.name}</small>
      <input type="text" className="form-control"/>
    </div>
  )
}

export default BasicInput;