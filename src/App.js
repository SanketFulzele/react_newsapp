import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0
  }
  setProgress= (progress)=> {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router> 
        <NavBar />
        <LoadingBar color='#f11946' height={3} progress={this.state.progress} />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress}   pageSize={6} country="in" key="general" category="general" />} />
          <Route path="/business" element={<News setProgress={this.setProgress}   pageSize={6} country="in" key="business" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress}   pageSize={6} country="in" key="entertainment" category="entertainment" />} />
          <Route path="/health" element={<News setProgress={this.setProgress}   pageSize={6} country="in" key="health" category="health" />} />
          <Route path="/science" element={<News setProgress={this.setProgress}   pageSize={6} country="in" key="science" category="science" />} />
          <Route path="/sports" element={<News setProgress={this.setProgress}   pageSize={6} country="in" key="sports" category="sports" />} />
          <Route path="/technology" element={<News setProgress={this.setProgress}   pageSize={6} country="in" key="technology" category="technology" />} />
        </Routes>
        
      </Router>
      </div>
    )
  }
}


// API key = 8002baa12ce34d598e93228f1e76b2bc 