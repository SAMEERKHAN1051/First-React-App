import React from "react"

function Header(){
    return(
      <header>
        <nav className='nav'>
          <img className='img' src="https://w7.pngwing.com/pngs/831/155/png-transparent-game-react-native-javascript-android-physics-symmetry-web-application-vuejs-thumbnail.png" alt="" />
          <ul className='nav-item'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }
  function Unorderlist(){
    return (
    <div>
    <ol>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ol>
    </div>
    )
  }
  function Footer(){
    return(
      <footer>
        <p>© 20xx last name here development. All rights reserved.</p>
      </footer>
    )
  }
  export {Header , Footer ,Unorderlist}