import Home from './Home';
import About from './About';
import Services from './Services';
import Branches from './Branches';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/branches' element={<Branches />} />
      </Routes>
    </div>
  );
}

export default App;