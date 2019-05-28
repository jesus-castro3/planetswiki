import React from 'react';
import { ENTITIES } from '../../constants';
import Slider from '../slider';
import Entity from '../entity';

function LandingPage(props) {
  return(
    <div className="landing-page" style={ props.show ? null : { display: 'none'} }>
        <h1 className="landing-page__title">SOLAR WIKI 🚀</h1>
        <p className="landing-page__description">Choose an entity from the list to start: </p>
        <Slider data={ENTITIES}>
          <Entity entityClick={props.entityClick}></Entity>
        </Slider>
    </div>
  )
}

export default LandingPage;