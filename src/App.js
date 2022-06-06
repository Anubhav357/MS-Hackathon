import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ProfileScreen from './screen/ProfileScreen';
import './App.css';
const App=()=>{
  return (
    <Router>
      <Routes>
        <Route path='/profile' element={<ProfileScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App;
