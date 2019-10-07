import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TableView extends Component {

  rowClicked(recordId) {
    alert(recordId);
  }

  render() {
    const headers = this.props.collection.fields.map((field) => <th>{field.name}</th> );
    const rows = this.props.records.map((record) =>
      <tr onClick={(e) => this.rowClicked(record.id)}>
        {this.props.collection.fields.map((field) =>
          <td style={{ border: '1px solid black' }}>{record.fields[field.id]}</td>
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
