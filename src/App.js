import React from 'react';
import logo from './logo.svg';
import LandingPage from './components/landing_page';
import WikiDetails from './components/wiki_details';
import { API } from './api';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showLandingPage: true,
      showWikiDetails: false,
      currentEntity: null,
      entityTracker: 0,
      entityList: []
    }
    
  }

  showWiki() {

  }

  close() {

  }

  entityClick(name) {

  }

  next() {


  }

  back() {


  }

  render () {
    return(
      <main>
        {/* landing page is responsible for rending our first page user sees
        We need to pass two props into Landing Page which it requires to work
        1. showLandingPage {Boolean}
        2. entityClick {Event} */}
        <LandingPage/>        
        {/* The second view we need to render is <WikiDetails/> this one will need several props for it to work :)
           Lets look at the proptypes requirements
          */}
      </main>  
    )
  }


}

export default App;
