import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FindRoomate from './components/FindRoomate/FindRoomate';
import Header from './components/Navigation/Navigation'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Header/>
      <FindRoomate/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
