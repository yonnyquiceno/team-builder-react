import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap'
import styles from './TeamMember.module.css';

export function TeamMember(props) {
  const dispatch = useDispatch();
  const {name, jobTitle, photo} = props.teamMember

  const removeUser = () => {
    console.log('removed!!')
  }

  return (
    <Container>
      <div className={styles.clearPanel}>
        <Row>
          <Col md={4}>
            <div className={styles.userPicContainer}>
              <img className={styles.userPic} src={photo}/>
            </div>
          </Col>

          <Col md={8}>
            <div className="font-weight-bold"><a href={photo} target="_blank">{name}</a></div>
            <div className="text-secondary">{jobTitle || '&mdash;'}</div>
            <div><a onClick={removeUser}>Remove User</a></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
