import './App.css';
import FindRoomate from './components/FindRoomate/FindRoomate';
import Header from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import Swap from './components/Swap/Swap';
import SignIn from './components/Signin/Signin';
import Register from './components/Register/Register';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
		route: 3,
		isSignedIn: false,
	});
  const changeRoute = (num) => {
		setState({ route: num });
	};
  return (
    state.route === 1 ? (
      <SignIn changeRoute={changeRoute}/>
    ) : state.route === 2 ? (
      <Register changeRoute={changeRoute} />
    ) : (
    <div className="App">
        
        <div id = "bg">
          <Header changeRoute={changeRoute}/>
          <Home/>
        </div>
        
        
      <FindRoomate/>
      <About />


      {/* <Home/> */}
      {/* <Swap/> */}
    </div>));
}

export default App;
