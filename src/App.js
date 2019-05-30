import React from 'react';
import logo from './logo.svg';
import LandingPage from './components/landing_page';
import WikiDetails from './components/wiki_details';
import { API } from './api';

import './App.css';

class App extends React.Component {

  /* We create our state here*/


  /* Helper methods here */


  /* Render Method ()
   * Lets create our components in the render() method!!
   *
   * <LandingPage/>
   *  Landing page is responsible for rendering first page user sees
   *  Landing page renders <Slider/> and <Entity/> components
   *  We need to pass TWO props into Landing Page
   *     1. showLandingPage {Boolean}
   *     2. entityClick {Event}
   * 
   * 
   * <WikiDetails/>
   *  This one will need several props for it to work :)
   *  In charge of showing a planet/entity data from the api.
   *     1. showWikiDetails = {Boolean}
   *     2. currentEntity = current chosen entity/planet {Object}
   *     3. close = manages close state variable {Boolean}
   *     4. back = fn goes back one step, in array {entityList}
   *     5. next = fn goes foward one step, in array {entityList}
   *     6. tracker = variable keeps track of pagination {Number}
   *
   */
  render(){
    return(
      <div>
        <h2>🥪Comida pa la banda🥪</h2>
      </div>
    )   
  }


}

export default App;
