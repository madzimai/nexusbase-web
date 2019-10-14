import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";
import AppContext from '../../utilities/context';
import TableView from "../views/TableView";
import RecordModal from '../modals/RecordModal';
import { Container } from 'reactstrap';
import { dummyData } from '../DummyData';

class CollectionRead extends Component {
  static contextType = AppContext

  closeRecordModal = () => {
    this.props.history.push(this.props.history.location.pathname)
  }

  render() {
    let recordList;
    const view = this.props.match.params.view;
    const viewProps = {
      collection: dummyData.collections[0],
      records: dummyData.records
    }
    const urlSearchParams = new URLSearchParams(window.location.search);
    const recordId = urlSearchParams.get('r');

    if (view === 'table') {
      recordList = <TableView {...viewProps}/>
    }

    return (
      <Fragment>
        <Container>
          <p>Collection Name</p>
          {recordList}
        </Container>
        <RecordModal recordId={recordId} close={this.closeRecordModal} />
      </Fragment>
    )
  }
}

export default withRouter(CollectionRead)