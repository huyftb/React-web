import { createSlice } from "@reduxjs/toolkit";
import UsersData from '../shared/ListOfUsers';

const USERS_LOCAL_STORAGE_KEY = "users";

const getUsersData = () => {
  const storedData = localStorage.getItem(USERS_LOCAL_STORAGE_KEY);
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return UsersData;
  }
};
export const userSlice = createSlice({
    name: "users",
    initialState: { value: getUsersData(), UsersData },
    reducers: {
      addUser: (state, action) => {
        state.value.push(action.payload);
        localStorage.setItem(
          USERS_LOCAL_STORAGE_KEY,
          JSON.stringify(state.value)
        );
      },
      
      deleteUser: (state, action) => {
        state.value = state.value.filter((user) => user.id !== action.payload.id);
        localStorage.setItem(
          USERS_LOCAL_STORAGE_KEY,
          JSON.stringify(state.value)
        );
      },
      updateUsername: (state, action) => {
        state.value.map((user) => {
          if (user.id === action.payload.id) {
            user.username = action.payload.username;
          }
          return user;
        });
        localStorage.setItem(
          USERS_LOCAL_STORAGE_KEY,
          JSON.stringify(state.value)
        );
      },
    },
  });

export default userSlice.reducer;
export const {addUser, deleteUser, updateUsername} = userSlice.actions;

