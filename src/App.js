// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
// import axios from 'axios';
import Section from './components/section';
import axios from "axios";
// import './App.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Sections: []
    }
    // let URL: = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/sections';
    // axios.get(URL){
    //   .then(data)
    // }
  };
  componentDidUpdate() {
    window.localStorage.setItem('Sections', JSON.stringify(this.state.Sections))
  }
  componentDidMount() {
    let apiURl2 = 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/sections'
   axios.get(apiURl2)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function() {  
      });
  }
  //  let sectionData = window.localStorage.getItem('Sections');
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <Section></Section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
