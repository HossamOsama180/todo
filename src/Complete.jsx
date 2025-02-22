import React from 'react'
import { useSelector } from 'react-redux'

const Complete = () => {
  const completetask=useSelector(state=>state.counter.CompleteTask)
  return (
    <div>
      {
        completetask.map((item, index)=>(
          <h2 key={index}>{item}</h2>
        ))
      }
    </div>
  )
}

export default Complete
