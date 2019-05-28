import React from 'react';

function NavBar(props) {
  return(
    <div className="navbar">
      { props.tracker !== 0 && <a href="#" onClick={ () => props.back() }> {'<'} </a>  }
      <a href="#" onClick={ () => props.next() }> {'>'} </a>
    </div>
  )
}

export default NavBar;