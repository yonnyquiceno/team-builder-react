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
    <Container>
      <div className={`${styles.clearPanel} mb-3`}>
        <Row>
          <Col md={4}>
            <div className={styles.userPicContainer}>
              <img className={styles.userPic} src={photo} alt="User"/>
            </div>
          </Col>

          <Col md={8}>
            <div className="font-weight-bold"><a href={photo} target="_blank" rel="noopener noreferrer">{name}</a></div>
            <div className="text-secondary">{jobTitle}</div>
            <div><Button variant="link" className="p-0 text-dark" onClick={removeUser}>Remove User</Button></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
