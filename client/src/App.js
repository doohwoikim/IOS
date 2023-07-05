import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TodoNew from './components/Todo'
import Calculator from './components/Calculator';
import HomeView from './views/HomeView';
import IndexView from './views/IndexView'
import Weather from './components/Weather';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/main" element={<IndexView/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/todo" element={<TodoNew/>}/>
        <Route path="/weather" element={<Weather/>}/>
      </Routes>
    </div>
  );
}

export default App;
