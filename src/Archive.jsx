import React from 'react'
import { useSelector } from 'react-redux'

const Archive = () => {
    const archive = useSelector(state=> state.counter.ArchiveTask)
    return (
        <div>
{
    archive.map((item,index)=>(
        <h2 key={index}>{item}</h2>
    ))
}        </div>
    )
}

export default Archive
