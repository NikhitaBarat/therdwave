import './App.css';
import Header from './components/header/header.components'
import Home from './routes/home/home.routes'
import Dashboard from './routes/dashboard/dashboard.routes'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Dashboard />
    </div>
  );
}

export default App;
