import { useState } from 'react'
import useLocalStorage from 'use-local-storage'
import logo from '../assets/logo.png'
import sun from '../assets/sun.svg'
import './Navbar.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  let darkTheme = 'light'
  const switchTheme = () => {
    if (darkTheme == 'light') {
      darkTheme = 'dark'
      sessionStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", sessionStorage.getItem("theme"));
    } else if(darkTheme == 'dark') {
      darkTheme = 'light'
      sessionStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", sessionStorage.getItem("theme"));
    }
  }
  return (
  <div class="container sticky-top app" id='nav-container'>
    <div id='navbar' className='px-3'>
      <div className='d-flex'>
        <img src={logo} alt="Logo" id='web-logo' />
        <div className='mx-3'><h5>abimanyu.com</h5></div>
      </div>
      
      <div className='nav-right'>
        <ul>
          <li>
            <button className='btn' onClick={switchTheme} id='switchButton'>
              <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
              </svg>
            </button>
          </li>
          <li>
            <button className='btn' id='projects-button'>Hire me!</button>
          </li>
        </ul>
      </div>
    </div>
      
  </div>
  )
}

export default App
