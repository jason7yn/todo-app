
import './App.css';
import Todo from './todo';
import About from './about';
import NavBar  from './nav';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Router>
      <div className="App" Provider={store}>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Todo}/>
          <Route path='/todo' exact component={Todo}/>
          <Route path='/about' exact component={About}/>
          
        </Switch>
        
        
    </div>

    </Router>
    
  );
}

export default App;
