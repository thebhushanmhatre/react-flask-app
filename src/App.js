import React, {useState, useEffect} from 'react';
import './App.css';
import Plot from './Plot';

function App() {
  const [currentTime, setCurrentTime] = useState(1)

  useEffect(() => {
    fetch('/api/time')
    .then(res => res.json())
    .then(data => setCurrentTime(data.time))
  }, [])

  return (
    <div className="App">
      <h3>Curent Time: {currentTime}.</h3>
      <Plot />
    </div>
  );
}

export default App;
