import React from 'react';
import { ENTITIES } from '../../constants';
import Slider from '../slider';
import Entity from '../entity';


const LandingPage = (props) => (
  <div  style={ props.show ? null : { display: 'none'} }>
      <h1>SOLAR WIKI 🚀</h1>
      <p>Choose an entity from the list to start: </p>
       {/* we need to add the <Slider/> component, receives as props
        1. data = ENTITIES list array */}
  </div>
)

export default LandingPage;