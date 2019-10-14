import React, { Component } from "react";
import AppContext from '../../utilities/context'
import {
  Button,
  Modal,
} from "reactstrap";
/*
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
*/

class RecordModal extends Component {
  static contextType = AppContext

  state = {
    exampleModal: false
  };

  render() {
    return (
      <Modal
        className="modal-dialog-centered"
        isOpen={this.props.recordId}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => this.props.close()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => this.props.close()}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </div>
      </Modal>
    );
  }
}

export default RecordModal
