import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ContextProvider } from './utilities/context'
// components
import Routes from './components/Routes';
import AppNavbar from './components/AppNavbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordModal: false,
      openRecordModal: this.openRecordModal,
      closeRecordModal: this.closeRecordModal,
    }
  }

  openRecordModal = (recordId) => {
    this.setState({ recordModal: true });
  }

  closeRecordModal = () => {
    this.setState({ recordModal: false });
  }

  render() {
    return (
      <Router>
        <ContextProvider value={this.state}>
          <AppNavbar />
          <Routes />
        </ContextProvider>
      </Router>
    );
  }
}

export default App;
