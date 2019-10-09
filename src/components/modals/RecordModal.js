import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppContext, { ContextConsumer } from '../../utilities/context'

class RecordModal extends Component {
  static contextType = AppContext
  
  state = {
    batch_mode: false,
    selected: null,
  }

  render() {
    const display = this.context.recordModal ? 'block' : 'none';

    return (
      <ContextConsumer>
        {({recordModal, closeRecordModal}) =>
          <div className="modal" style={{ display: display }}>
            <section className="modal-main">
              <button onClick={closeRecordModal}>close</button>
              <div>hkkll</div>
            </section>
          </div>
        }
      </ContextConsumer>
    );
  }
}

export default RecordModal
