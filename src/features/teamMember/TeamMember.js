import React from 'react';
import {useDispatch} from 'react-redux'
import {Container, Row, Col, Button} from 'react-bootstrap'
import styles from './TeamMember.module.css';
import {deleteTeamMember} from '../teamBuilder/teamBuilderSlice'

export function TeamMember(props) {
  const {name, job_title: jobTitle, photo} = props.teamMember
  const dispatch = useDispatch()

  const removeUser = () => {
    dispatch(deleteTeamMember(props.teamMember))
  }

  return (
    <div className={`${styles.clearPanel} mb-3`}>
      <Row>
        <Col md={4}>
          <div className={styles.userPicContainer}>
            <img className={styles.userPic} src={photo} alt="User"/>
          </div>
        </Col>

        <Col md={8}>
          <div><a href={photo} target="_blank" className="font-weight-bold text-dark" rel="noopener noreferrer">{name}</a></div>
          <div className="text-secondary">{jobTitle}</div>
          <div><button className="p-0 text-dark button-link" onClick={removeUser}>Remove User</button></div>
        </Col>
      </Row>
    </div>
  );
}
