import React from 'react'
import imgCart3 from '../../../assets/images/Latest3.jpeg'
import imgCart1 from '../../../assets/images/Latestblog.jpeg'
import imgCart2 from '../../../assets/images/Latestblog2.jpeg'
import './LatestBlog.scss'
import LatestblogCart from './LatestblogCart.jsx'
const latestblog = () => {
  return (
    
    <div id='Blog' className='latestblog'>
            <div className='latestblog-title'>
                <h2>LATEST BLOG POSTS</h2>   
                <p>Latest marketplace success stories and tutorials</p>
            </div>
            <div className='latestblog-cart'>
              <LatestblogCart url="https://www.pexels.com/" img={imgCart1} title="Transition Your Favorite Looks into" date='October 10, 2021' buttontitle="Image" />
              <LatestblogCart url="https://www.amazon.sa/?&tag=sagooglepcsta-21&ref=pd_sl_6n45qniscc_e&adgrpid=105201941200&hvpone=&hvptwo=&hvadid=593747219480&hvpos=&hvnetw=g&hvrand=6289038890476151647&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1012089&hvtargid=kwd-12692811&hydadcr=25408_2648964&language=en_AE" img={imgCart2} title="Meeting Breathtaking Beauty for Ev..." date='October 27, 2021' buttontitle="Shopping" />
              <LatestblogCart url="Cj0KCQjwk96lBhDHARIsAEKO4xY86TJnbYqexEBJ4P_ALUy7st_38QAsQjdNgmsp6RPnHucYtZE5xA4aAh0cEALw_wcB" img={imgCart3} title="Perfect Quality Reasonable Price fo..." date='October 1, 2021' buttontitle="Travle" />
            </div>
    </div>
  )
}

export default latestblog