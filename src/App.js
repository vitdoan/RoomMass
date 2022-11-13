import './App.css';
import FindRoomate from './components/FindRoomate/FindRoomate';
import Header from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Swap from './components/Swap/Swap';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <FindRoomate/> */}
      {/* <Home/> */}
      <Swap/>
    </div>
  );
}

export default App;
