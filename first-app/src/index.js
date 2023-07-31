// import React from 'react'
// import reactDOM from "react-dom/client";

//   const Page = (
//     <div className="main">
//     <img src="https://mimo.app/r/cat.png" alt="" />
//     <h1>Fun Fact About React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on GitHub</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//     </div>
//   )

// const root = reactDOM.createRoot(document.getElementById("root"))

// root.render(
//   Page 
// )

import React from 'react'
import  ReactDOM from 'react-dom/client'
import "./style.css"
import {Header, Unorderlist, Footer} from "./header"

const page = () => {
  return (
    <div>
      <Header />
      <Unorderlist />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
 page()
)