import React from 'react';
import { PLANETS } from '../../constants';
import Slider from '../../components/Slider';
import Entity from '../../components/Entity';


const Home = () => {
    return(        
        <div className="home">
            <h1 className="home__title">PLANETS WIKI <span role="img" aria-label="rocket emoji">🚀</span></h1>
            <p className="home__description">Choose an entity from the list to start: </p>
            <Slider>
                {PLANETS.map(({ name, color, size }, idx) => <Entity color={color} key={idx} name={name} size={size} /> )}
            </Slider>
        </div>
    )
}

export default Home;