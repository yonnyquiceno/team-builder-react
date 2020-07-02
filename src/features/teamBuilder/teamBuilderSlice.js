import { createSlice } from '@reduxjs/toolkit';

export const teamBuilderSlice = createSlice({
  name: 'teamBuilder',
  initialState: [
    {name: "rafael nadal", jobTitle: "Tennist", photo: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/04/20/15557840620832.jpg'}
  ],
  reducers: {
    addTeamMember: (state, action) => {
      state.push(action.payload)
    },
  },
});

export const { addTeamMember } = teamBuilderSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const createTeamMember = teamMember => dispatch => {

  //here AXIOS come

  dispatch(addTeamMember(teamMember));
};

export default teamBuilderSlice.reducer;
