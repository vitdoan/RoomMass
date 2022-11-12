import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Navigation/Navigation'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      
    </div>
  );
}

export default App;
