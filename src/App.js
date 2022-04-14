import './App.css';
import Header from './components/header/header.components'
import Home from './routes/home/home.routes'
import Dashboard from './routes/dashboard/dashboard.routes'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App
