import { Action, createReducer, on} from "@ngrx/store";

import * as profileActions from '../actions/profile.actions';

export const profileFeatureKey = 'profile';

export interface State {
  profile: any;
  profileLoading: boolean;
  profileSuccessful: boolean;
  profileError: string;
}

export const initialState: State = {
  profile: false,
  profileLoading: false,
  profileSuccessful: null,
  profileError: null,
}

const profileReducer = createReducer(
  initialState,

  on(profileActions.setProfileAction, (state, action) => ({
    ...state,
    profile: action.profile,
  })),

  on(profileActions.setProfileActionSuccessful, (state, action) => ({
    ...state,
    profileLoading: false,
    profileSuccessful: true,
    profile: action.profile
  })),

  on(profileActions.setProfileActionFailed, (state, action) => ({
    ...state,
    profileLoading: false,
    profileSuccessful: false,
    profileError: action.err
  })),

  on(profileActions.getProfileAction, state => ({
    ...state,
    profileLoading: true,
  })),

  on(profileActions.getProfileSuccessful, (state, action) => ({
    ...state,
    profileLoading: false,
    profileSuccessful: true,
    profile: action.profile
  })),

  on(profileActions.getProfileFailed, (state, action) => ({
    ...state,
    profileLoading: false,
    profileSuccessful: false,
    profileError: action.err
  })),
)

export function reducer(state: State | undefined, action: Action) {
  return profileReducer(state, action);
}

export const getProfile = (state: State) => state.profile;
