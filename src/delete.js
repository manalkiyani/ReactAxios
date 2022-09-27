import React from 'react'

const del = (props) => {
   
  return (
    <div onClick={()=>props.onClick(props.index)}>delete</div>
  )
}

export default del;