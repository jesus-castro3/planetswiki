import React from 'react';

const NavBar = ({ tracker, next, back }) => (
    <div className="navbar">
      { tracker !== 0 && <a href="#" onClick={back}> {'<'} </a>  }
      <a href="#" onClick={next}> {'>'} </a>
    </div>
)

export default NavBar;