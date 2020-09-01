import React from 'react';




const NavBar = (props) => (
// requires props
// back= fn
// next=  fn
// tracker= Number
    <div className="navbar">
      { 
        // back button
        props.tracker !== 0 && 
        <a href="#"> {'<'} </a>  
      }
      {/* //next button */}
      <a href="#"> {'>'} </a>
    </div>
)

export default NavBar;