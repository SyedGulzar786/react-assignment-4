import React from 'react'

const Card = ({ value , getData}) => {
    return (
        <div>
            <h1>{value}</h1>
            <button className='rounded px-2 py-1' onClick={()=>getData("data from child")}>send Data</button>
        </div>
    )
}

export default Card