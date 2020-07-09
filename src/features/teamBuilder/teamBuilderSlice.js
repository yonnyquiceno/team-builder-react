import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash'

export const teamBuilderSlice = createSlice({
  name: 'teamBuilder',
  initialState: {
    showAddTeamMemberModal: false,
    teamMembers: []
  },
  reducers: {
    setShowAddTeamMemberModal: (state, action) => {
      state.showAddTeamMemberModal = action.payload
    },
    setTeamMembers: (state, action) => {
      state.teamMembers = action.payload
    },
    addTeamMember: (state, action) => {
      state.teamMembers.push(action.payload)
    },
    removeTeamMember: (state, action) => {
      const index = state.teamMembers.findIndex(teamMember => teamMember.id === action.payload)
      state.teamMembers.splice(index, 1)
    }
  },
});

export const { addTeamMember, removeTeamMember, setTeamMembers, setShowAddTeamMemberModal } = teamBuilderSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchTeamMembers = () => async dispatch => {
  axios.get(`http://localhost:3000/team_members`)
  .then(res => {
    const teamMembers = res.data;
    dispatch(setTeamMembers(teamMembers))
  })
};

export const createTeamMember = teamMember => dispatch => {
  teamMember = _.mapKeys(teamMember, function(value, key) {
    return _.snakeCase(key)
  });

  axios.post(`http://localhost:3000/team_members`, {team_member: teamMember})
  .then((res) => {
    dispatch(addTeamMember(res.data));
  })
};

export const deleteTeamMember = teamMember => dispatch => {
  axios.delete(`http://localhost:3000/team_members/${teamMember.id}`)
  .then(() => {
    dispatch(removeTeamMember(teamMember.id));
  })
};

export default teamBuilderSlice.reducer;
