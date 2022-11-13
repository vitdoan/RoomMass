import './App.css';
import FindRoomate from './components/FindRoomate/FindRoomate';
import Header from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
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

  const [user, setUser] = useState({
		id: "",
		name: "",
		username: "",
		joined: new Date(),
	});

  const loadUser = (data) => {
		setUser({
			id: data.id,
			name: data.name,
			username: data.username,
			joined: data.joined,
		});
		console.log("user is loaded");
	};
  
const onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState({isSignedIn: false})
  } else if (route === 3 || route === 4 || route === 5) {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}

  return (
    state.route === 1 ? (
      <SignIn changeRoute={changeRoute} loadUser={loadUser}/>
    ) : state.route === 2 ? (
      <Register changeRoute={changeRoute} loadUser={loadUser}/>
    ) : state.route === 3 ?(
    <div className="App">
        
        <div id = "bg">
          <Header isSignedIn={state.isSignedIn} changeRoute={changeRoute}/>
          <Home changeRoute={changeRoute}/>
          <About changeRoute = {changeRoute} />
          <Footer changeRoute = {changeRoute}/>
        </div>
    </div>
    ) : state.route === 4 ?(
      <FindRoomate isSignedIn={state.isSignedIn} changeRoute={changeRoute} user={user}/>
    ) : (
      <Swap isSignedIn={state.isSignedIn} changeRoute={changeRoute} user={user}/>
    )
    );

}

export default App;
