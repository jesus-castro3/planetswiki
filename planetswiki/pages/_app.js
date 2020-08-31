import React from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp


// import React, { useState } from 'react';
// import logo from './logo.svg';
// import LandingPage from './components/landing_page';
// import WikiDetails from './components/wiki_details';
// import { API } from './api';

// import './App.css';

// class App extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       showLandingPage: true,
//       showWikiDetails: false,
//       currentEntity: null,
//       entityTracker: 0,
//       entityList: []
//     }

//     this.showWiki = this.showWiki.bind(this);
//     this.close = this.close.bind(this);
//     this.entityClick = this.entityClick.bind(this);
//     this.back = this.back.bind(this);
//     this.next = this.next.bind(this);
//   }

//   showWiki() {
//     this.setState({
//       showLandingPage: false,
//       showWikiDetails: true
//     });
//   }

//   close() {
//     this.setState({
//       showLandingPage: true,
//       showWikiDetails: false
//     });
//   }

//   entityClick(name) {
//     API.GET.entity(name).then(({ currentEntity, entityList }) => {
//       this.setState({
//         currentEntity,
//         entityList,
//         showLandingPage: false,
//         showWikiDetails: true
//       })
//     })
//   }

//   next() {
//     const tracker = (this.state.entityTracker === this.state.entityList.length - 1) ? this.state.entityTracker : this.state.entityTracker + 1;
//     this.setState({
//       entityTracker: tracker,
//       currentEntity: this.state.entityList[tracker]
//     });
//   }

//   back() {
//     const tracker = (this.state.entityTracker === 0) ? 0 : this.state.entityTracker - 1;
//     this.setState({
//       entityTracker: tracker,
//       currentEntity: this.state.entityList[tracker]
//     });
//   }

//   render() {
//     return (
//       <main className="App">
//         <LandingPage
//           show={this.state.showLandingPage}
//           entityClick={this.entityClick} />
//         {/* <WikiDetails 
//           currentEntity={this.state.currentEntity}
//           entityList={this.state.currentEntity}
//           tracker={this.state.entityTracker}
//           back={this.back}
//           next={this.next}
//           close={this.close}
//           show={this.state.showWikiDetails}/> */}
//       </main>
//     )
//   }


// }

// export default App;
