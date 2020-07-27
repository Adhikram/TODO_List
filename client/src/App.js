import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar  from './components/AppNavber';
import Todolist from './components/Todolist'
import ItemModal from './components/ItemModal';
import {Provider} from  'react-redux';
import store from './store';
import {Container} from 'reactstrap';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
          <div className="App">
            <AppNavbar/>
            <Container>
              <ItemModal/>
              <Todolist/>
            </Container>
            
          </div>
      </Provider>
    );
  }
  
}

export default App;