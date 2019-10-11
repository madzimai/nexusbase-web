import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ContextProvider } from './utilities/context'
import Routes from './components/Routes';
import RecordModal from './components/modals/RecordModal';

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
          <div className="App">
            <div className="header">
              <Link to="/">NexusBase</Link>-|-
              <Link to="/collections">Collections</Link>
            </div>
            <hr/>
            <Routes />
            <RecordModal />
          </div>
        </ContextProvider>
      </Router>
    );
  }
}

export default App;
