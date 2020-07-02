import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import teamBuilderReducer from '../features/teamBuilder/teamBuilderSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    teamMembers: teamBuilderReducer
  },
});
