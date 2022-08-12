import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer id='flexend'>
        <div id='medianon'>
            <p id='nn'>Nigeria</p>
            <hr width='90%' id='hr'/>
        </div>
        <div id='ndline'>
          <div id='flexstart'>
            <div>About</div>
            <div>Advertising</div>
            <div>Business</div>
            <div >How Search works</div>
          </div>
          <div id='center'><div>Carbon neutral since 2007</div></div>
          
          <div id='flexen'>
            <div >Privacy</div>
            <div>Terms</div>
            <div>Settings</div>
          </div>
        </div>
        <div id="footer">
            <p id="footnote">© Copyright Oluniyi 2022 | Developed by <a href="https://facebook.com/oluniyiozy.israel">Oluniyi Israel Adebowale</a></p>
		</div>
    </footer> 
  )
}

export default Footer