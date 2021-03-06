
import './App.css';
import Todo from './todo';
import About from './about';
import NavBar  from './nav';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import ItemDetail from './ItemDetail';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Todo}/>
          <Route path='/todo' exact component={Todo}/>
          <Route path='/about' exact component={About}/>
          <Route path='/todo/:id'component={ItemDetail}/>
          
        </Switch>
        
        
    </div>

    </Router>
    
  );
}

export default App;
