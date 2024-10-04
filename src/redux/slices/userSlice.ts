import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {
      id: 0,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
    users: [],
    archiveUsers: [],
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setArchiveUsers(state, action) {
      state.archiveUsers = action.payload;
    },
  },
});

export const { setUser, setUsers, setArchiveUsers } = usersSlice.actions;
export default usersSlice.reducer;
