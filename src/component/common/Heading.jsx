import React from 'react'
import '../../Style/Heading.scss'
const Heading = ({title , subtitle}) => {
  return (
    <div className='heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

export default Heading