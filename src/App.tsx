import React from 'react';
import {
  Link,
  Outlet
} from "react-router-dom";
import './App.scss';

/**
 * Так, вроде, не правильно, но я решил сделать из 
 * этого компонента шаблон для всего приложения
 */
function App() {
  return (
    <div className="App">
      <h1>Web Chess</h1>
      <Outlet />
    </div>
  );
}

export default App;
