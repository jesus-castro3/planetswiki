import React from 'react';
import { ENTITIES } from '../../constants';
import Slider from '../../components/Slider';
import Entity from '../../components/Entity';


const Home = () => {
    return(        
        <div className="home">
            <h1 className="home__title">PLANETS WIKI <span role="img" aria-label="rocket emoji">🚀</span></h1>
            <p className="home__description">Choose an entity from the list to start: </p>
            <Slider>
                {ENTITIES.map(({ name, color, size }, idx) => <Entity color={color} key={idx} name={name} size={size} /> )}
            </Slider>
        </div>
    )
}

export default Home;