import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { AppThunk } from 'redux/store';
import { RootState } from 'redux/rootReducer';
import { axiosInstance } from 'src/utils/fetchHelpers';

/* ----DEFINE_ACTION_REDUCER----*/

interface HomeData {
  user: UserGithub | null;
}

const initialState: HomeData = {
  user: null,
};

const homeDataSlice = createSlice({
  name: 'homeData',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<UserGithub>) {
      state.user = action.payload;
    },
  },
});

export const { setCurrentUser } = homeDataSlice.actions;

export default homeDataSlice.reducer;

/* ----DEFINE_THUNK_FUNCTION----*/

export const fetchUserInfo = (userName: string): AppThunk => async dispatch => {
  try {
    // const data = await fetch(process.env.REACT_APP_BASE_URL + userName).then(response => response.json());
    const { data } = await axiosInstance.get<UserGithub>(userName);
    dispatch(setCurrentUser(data));
  } catch (e) {
    console.log('error', e);
  }
};

/* ----DEFINE_SELECTOR----*/

export const selectHomeData = (state: RootState): HomeData => state.homeData;

export const selectUserName = createSelector(selectHomeData, (homeData: HomeData) => homeData?.user?.name);
