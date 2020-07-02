import React, { useState } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap'
import {TeamMember} from '../teamMember/TeamMember'
import styles from './TeamBuilder.module.css';

const TeamBuilder = props => {
  const {teamMembers} = props
  const dispatch = useDispatch();

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
              <a className="text-primary">
                <b-icon-person-plus-fill className="mr-2"></b-icon-person-plus-fill>
                ADD NEW USER
              </a>
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

        {/* <AddTeamMemberModal></AddTeamMemberModal> */}
      </div>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    teamMembers: state.teamMembers
  };
};

export default connect(mapStateToProps)(TeamBuilder);
