import { useState } from 'react'
import './Hero.css'
import profilePic from '../assets/profilePic.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d-flex justify-content-center align-items-center flex-column' id='mainPage'>
      <div id='profileDiv'>
        <img src={profilePic} alt="profile picture" id='profilePicture' />
      </div>
      <div className='mt-4' id='skillsId'>
        <div className='text-center'>
          <h3 className='m-0'>9<span>★</span></h3>
          <p>JAVASCRIPT</p>
        </div>
        <div className='text-center'>
          <h3 className='m-0'>8<span>★</span></h3>
          <p>HTML+CSS</p>
        </div>
        <div className='text-center'>
          <h3 className='m-0'>7.5<span>★</span></h3>
          <p>PYTHON</p>
        </div>
      </div>
      <div id='sosmedId'>
        <a href="https://www.youtube.com/channel/UCrXNHs9fgTPWixcoQkiNNQg">Youtube</a>
        <a href="https://www.instagram.com/abyymyu_/">Instagram</a>
        <a href="https://kitsuanime.com/">Projects</a>
        <a href="https://github.com/notTyw0o">Github</a>
      </div>
    </div>
  )
}

export default App
