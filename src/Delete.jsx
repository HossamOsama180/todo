import React from 'react'
import { useSelector } from 'react-redux'

const Delete = () => {
    const deletetask= useSelector(state=> state.counter.DeleteeTask)
    return (
        <div>
            {
                deletetask.map((item, index)=>(
                    <h2 key={index}>{item}</h2>
                ))
        
        
        
        }
        </div>
    )
}

export default Delete
