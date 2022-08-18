import React from 'react'
import './Body.css'
import googleimg from '../Images/7123960_logo_google_icon.png' 
import googleimgmobl from '../Images/7123960_logo_google_icon_mobile.png'
import googlemic from '../Images/7123011_google_mic_icon.png'
import googlesearch from '../Images/search.svg'


function Body() {
  return (
    <div>
        <div  className='glecontainer'>
            <img src={googleimg} alt='...' id='gle' />
            <img src={googleimgmobl} alt='...' id='glemoble'/>
            
        </div>
        <div className='glecontainer'>
            <div id='gleinputcontainer'>
           <div id='inputicon'>
                <img src={googlesearch} alt="..." width="30px" height='30px' />
                </div>
                <input type='text' id='search' placeholder='Search...'/>
                 <div id='inputicon'>
                <img src={googlemic} alt="..." width="50px" height='50px'/>
            </div>
            </div>
        </div>
        <div id='belowsrch'>
            <span id='COntents'>
                Google Search
            </span>
            <span id='COntents'>
                Im feeling lucky
            </span>
        </div>
        <div id='belowcontents'>
            <div id='offerd'>
                            Google offered in : <span className='links'>
                                                    <a href='#body'>Hausa</a>
                                                </span>
                                                <span className='links'>
                                                    <a href='#body'>Igbo</a>
                                                </span>
                                                <span className='links'>
                                                    <a href='#body'>Èdè</a>
                                                </span>
                                                <span className='links'>
                                                    <a href='#body'>Yorùbá</a>
                                                </span>
                                                <span className='links'>
                                                    <a href='#body'>Pidgin</a>
                                                </span>
                                                <br/><br/><br/><br/> <br/><br/><br/> <br/><br/>
                                   
            </div>
        </div>
    </div>
  )
}

export default Body