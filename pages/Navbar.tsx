import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Meme</a><button className="btn btn-primary float-right" type="submit">Add images</button>

      </div>
    </nav>  
    </div>
  )
}

export default Navbar