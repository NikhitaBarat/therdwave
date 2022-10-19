import './App.css';
import Header from './components/header/header.components'
import Home from './routes/home/home.routes'
import Dashboard from './routes/dashboard/dashboard.routes'
import { Routes, Route } from 'react-router-dom'
import { use } from '@maticnetwork/maticjs'
import { Web3ClientPlugin } from '@maticnetwork/maticjs-web3'

// install web3 plugin
use(Web3ClientPlugin)
function App() {
  Arkane.createArkaneProviderEngine({clientId: `Arketype`}).then(provider => {
    web3 = new Web3(provider);
});
  return (
    <div className="App">
      <section>
        <div className='spreads'></div>
        <div className='spreads'></div>
      </section>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App
