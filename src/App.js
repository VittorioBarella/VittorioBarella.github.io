import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sobre' exact component={Sobre} />
          <Route path='/contato' exact component={Contato} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
