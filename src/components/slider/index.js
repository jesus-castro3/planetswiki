import React from 'react';

function Slider(props) {
  return(
    <div className='slider'>
        {
          props.data.map(function(p, idx) {
            return React.cloneElement(props.children, { color: p.color, size: p.size, name: p.name, key: idx})
          })
        }
    </div>
  );
}

export default Slider;