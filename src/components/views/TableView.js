import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import AppContext from '../../utilities/context';
import url from '../../utilities/url';
import { Table } from 'reactstrap';

class TableView extends Component {
  static contextType = AppContext

  state = {
    batch_mode: false,
    selected: null,
  };

  rowClicked = (recordId) => {
    const currentUrl = this.props.history.location.pathname
    this.props.history.push(currentUrl + "?r=" + recordId)
  }

  render() {
    const headers = this.props.collection.fields.map((field) =>
      <th key={field.id}>{field.name}</th>
    );
    const rows = this.props.records.map((record) =>
      <tr key={record.id} onClick={() => this.rowClicked(record.id)}>
        {this.props.collection.fields.map((field, index) =>
          <td key={index} style={{ border: '1px solid black' }}>{record.fields[field.id]}</td>
        )}
      </tr>
    );

    return (
      <Table hover>
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    )
  }
}

export default withRouter(TableView)
