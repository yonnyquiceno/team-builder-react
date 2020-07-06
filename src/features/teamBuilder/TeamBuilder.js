import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap'
import {TeamMember} from '../teamMember/TeamMember'
import styles from './TeamBuilder.module.css';
import {Button} from 'react-bootstrap'
import {fetchTeamMembers, setShowAddTeamMemberModal} from './teamBuilderSlice'

const TeamBuilder = props => {
  const [teamMembers, setTeamMembers] = useState(props.teamMembers)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeamMembers())
  }, [dispatch]);

  useEffect(() => {
    setTeamMembers(props.teamMembers)
  }, [props.teamMembers]);

  const handleOpenModal = () => {
    dispatch(setShowAddTeamMemberModal(true))
  }

  return (
    <Container>
      <div className={styles.shadowedBox}>
        <div className={styles.boxHeader}>
          <Row>
            <Col sm={7}>
              <span>YOUR TEAM</span>
              <span className="ml-1">({teamMembers.length})</span>
            </Col>

            <Col sm={5} className="text-right">
              <Button variant="link" onClick={handleOpenModal} className="text-primary font-weight-bold">
                <b-icon-person-plus-fill className="mr-2"></b-icon-person-plus-fill>
                ADD NEW USER
              </Button>
            </Col>
          </Row>
        </div>

        <Row className={styles.boxContent}>
          {teamMembers.map((teamMember, index) => {
            return <Col sm={4} key={index + teamMember.name}>
              <TeamMember teamMember={teamMember} className="mb-3"></TeamMember>
            </Col> 
          })}
        </Row>
      </div>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    teamMembers: state.teamBuilder.teamMembers
  };
};

export default connect(mapStateToProps)(TeamBuilder);
