import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import {Modal, Form, Button} from 'react-bootstrap'
import { createTeamMember, setShowAddTeamMemberModal } from '../teamBuilder/teamBuilderSlice';

const AddTeamMemberModal = props => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({name: '', jobTitle: '', photo: ''})

  const handleClose = () => dispatch(setShowAddTeamMemberModal(false));
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTeamMember(formValues))
    handleClose()
  };
  const handleInputChange = e => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  return (
    <>
      <Modal show={props.show} onHide={handleClose} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" type="text" onChange={handleInputChange} placeholder="Full Name" required/>
            </Form.Group>
            <Form.Group controlId="jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control name="jobTitle" type="text" onChange={handleInputChange} placeholder="Job Title" required/>
            </Form.Group>
            <Form.Group controlId="photo">
              <Form.Label>Photo</Form.Label>
              <Form.Control name="photo" type="url" onChange={handleInputChange} placeholder="Enter a photo URL" required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = state => {
  return {
    show: state.teamBuilder.showAddTeamMemberModal
  };
};

export default connect(mapStateToProps)(AddTeamMemberModal);