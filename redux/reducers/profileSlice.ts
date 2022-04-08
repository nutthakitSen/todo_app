import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ProfileType {
  name: string;
}

interface ProfileWrapperType {
  value: ProfileType[];
}

const initialState: ProfileWrapperType = {
  value: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    getProfiles: (state, action) => {
      state.value = action.payload;
    },
    createProfile: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { getProfiles, createProfile } = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profiles.value;
export default profileSlice.reducer;
