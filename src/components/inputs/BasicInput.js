import React from 'react'

const BasicInput = (props) => {
  return(
    <div>
      <small>{props.name}</small>
      <input type="text"
        id={props.elementID}
        className="form-control"
        onChange={props.func}
        key='name'
        />
    </div>
  )
}

export default BasicInput;
