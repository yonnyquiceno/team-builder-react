import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap'
import {TeamMember} from '../teamMember/TeamMember'
import AddTeamMemberModal from '../addTeamMemberModal/AddTeamMemberModal'
import styles from './TeamBuilder.module.css';
import {Button} from 'react-bootstrap'
import {fetchTeamMembers, setShowAddTeamMemberModal} from './teamBuilderSlice'
import { BsFillPersonPlusFill } from 'react-icons/bs'

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
              <button onClick={handleOpenModal} className="font-weight-bold text-primary button-link">
                <BsFillPersonPlusFill className='mr-2'/>
                ADD NEW USER
              </button>
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
      <AddTeamMemberModal />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    teamMembers: state.teamBuilder.teamMembers
  };
};

export default connect(mapStateToProps)(TeamBuilder);
