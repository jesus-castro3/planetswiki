import React from 'react';

function Entity(props) {
  return(
    <div key={props.key} className="planet__wrapper" onClick={ () => props.entityClick(props.name) }>
      <span className='planet' style={{ backgroundColor: props.color, width: props.size, height: props.size}}></span>
      <p>{props.name}</p>
    </div>
  );
}

export default Entity;