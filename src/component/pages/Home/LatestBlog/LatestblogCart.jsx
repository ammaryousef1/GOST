import React from 'react'
import './LatestBlog.scss'
const latestblogCart = ({img , title , date , buttontitle , url}) => {
  return (
    <div className='latestblogCart'>
        <div className='latestblogCart-img'>
            <img src={img} alt='' />
        </div>
        <div className='latestblogCart-inside'>
            <button className='btn gradient-button'><a href={url} target='__blank'>{buttontitle}</a></button>
            <div className="latestblogCart-title">
                <span>Post Date: <span>{date}</span></span>
                <h5>{title}</h5>
            </div>
        </div>
    </div>
  )
}

export default latestblogCart