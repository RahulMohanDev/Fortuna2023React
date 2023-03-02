import './admin.style.css'
import { useState } from 'react'

// const obj  = {
//    isLoggedIn: true
// }

function AdminComponent() {
  // inline style
  //   const styleForAdmin = { color: 'red' }
  //   const styleForUser = { color: 'blue' }

  const [isLoggedIn, toogleLoggedin] = useState(false)

  // this will always be false
  // let  isLoggedIn = false;

  //   const isAdmin = true
  return (
    <div>
      {isLoggedIn ? <h1>Admin</h1> : <h1>Please login</h1>}
      <button
        onClick={() => {
          toogleLoggedin(!isLoggedIn)
        }}
      >
        {isLoggedIn ? 'logout' : 'login'}
      </button>
    </div>
  )

  // conditional  styling
  //   return (
  //     <div className={isAdmin ? 'admin' : 'user'}>
  //       {/* <h1 style={isAdmin ? styleForAdmin : styleForUser}>
  //        */}
  //       <h1>Admin</h1>
  //     </div>
  //   )
}

export default AdminComponent
