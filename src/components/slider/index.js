import React from 'react';

const Slider = (props) => (
  <div className='slider'>
      {
        props.data.map(function(p, idx) {
          return React.cloneElement(props.children, { color: p.color, size: p.size, name: p.name, key: idx})
        })
      }
  </div>
)

export default Slider;