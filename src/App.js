import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router> 
        <NavBar />
        <LoadingBar color='#f11946' height={3} progress={progress} />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress}   pageSize={6} country="in" key="general" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress}   pageSize={6} country="in" key="business" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress}   pageSize={6} country="in" key="entertainment" category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress}   pageSize={6} country="in" key="health" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress}   pageSize={6} country="in" key="science" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress}   pageSize={6} country="in" key="sports" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress}   pageSize={6} country="in" key="technology" category="technology" />} />
        </Routes>
        
      </Router>
      </div>
    )
}

export default App;

// API key = 8002baa12ce34d598e93228f1e76b2bc 