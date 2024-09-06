import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import JoinRoomPage from './components/JoinRoomPage';
import CreateRoomPage from './components/CreateRoomPage';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Room from './components/Room';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/join' element={<JoinRoomPage />}></Route>
          <Route path='/create' element={<CreateRoomPage />}></Route>
          <Route path='/room/:roomCode' element={<Room />}></Route>
        </Routes>
      </Router>
    </>
  )
};

export default App
