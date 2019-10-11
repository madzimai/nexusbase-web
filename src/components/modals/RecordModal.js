import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppContext from '../../utilities/context'

class RecordModal extends Component {
  static contextType = AppContext
  
  state = {
    batch_mode: false,
    selected: null,
    loading: false,
  }

  render() {
    const display = this.context.recordModal ? 'block' : 'none';

    return (
      <div className="modal" style={{ display: display }}>
        <section className="modal-main">
          <button onClick={this.context.closeRecordModal}>close</button>
          <div>hkkll</div>
        </section>
      </div>
    );
  }
}

export default RecordModal
