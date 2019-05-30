import React from 'react';

function Entity(props) {
  return(
    <div className="planet__wrapper">
      {/* we need special styling for style prop add backgroundColor and width, height */}
      <span className='planet'></span>
      <p></p>
    </div>
  );
}

export default Entity;