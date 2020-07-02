import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Modal, Form, Button} from 'react-bootstrap'
import styles from './AddTeamMemberModal.module.css';
import { createTeamMember } from '../teamBuilder/teamBuilderSlice';

export function AddTeamMemberModal(props) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({name: '', jobTitle: '', photo: ''})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" type="text" onChange={handleInputChange} placeholder="Full Name" required/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Job Title</Form.Label>
              <Form.Control name="jobTitle" type="text" onChange={handleInputChange} placeholder="Job Title" required/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
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
