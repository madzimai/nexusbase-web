import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppContext from '../../utilities/context'

class TableView extends Component {
  static contextType = AppContext

  state = {
    batch_mode: false,
    selected: null,
  };

  rowClicked(recordId) {
    alert(recordId);
  }

  render() {
    const headers = this.props.collection.fields.map((field) =>
      <th key={field.id}>{field.name}</th>
    );
    const rows = this.props.records.map((record) =>
      <tr key={record.id} onClick={() => this.context.openRecordModal()}>
        {this.props.collection.fields.map((field, index) =>
          <td key={index} style={{ border: '1px solid black' }}>{record.fields[field.id]}</td>
        )}
      </tr>
    );

    return (
      <table id="records-table">
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default TableView
