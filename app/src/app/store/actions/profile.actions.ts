import {createAction, props} from "@ngrx/store";


export const setProfileAction = createAction(
  '[Profile] set user profile',
  props<{profile: any}>()
)

export const setProfileActionSuccessful = createAction(
  '[Profile] get user profile Successful',
  props<{profile: any}>()
);

export const setProfileActionFailed = createAction(
  '[Profile] get user profile Failed',
  props<{err: string}>()
);

export const getProfileAction = createAction(
  '[Profile] get user profile',
  props<{profile: any}>()
);

export const getProfileSuccessful = createAction(
  '[Profile] get user profile Successful',
  props<{profile: any}>()
);

export const getProfileFailed = createAction(
  '[Profile] get user profile Failed',
  props<{err: string}>()
);

export const CREATE_PROFILE = createAction(
  '[Profile] - Create Profile',
  props<{profile: any}>()
);

export const CREATE_PROFILE_SUCCESSFUL = createAction(
  '[Profile] - Create Profile successful',
  props<{success: string}>()
);

export const CREATE_PROFILE_FAILED = createAction(
  '[Profile] - Create Profile failed',
  props<{err: string}>()
);

export const UPDATE_PROFILE = createAction(
  '[Profile] - Update Profile',
  props<{profile: any}>()
);

export const UPDATE_PROFILE_SUCCESSFUL = createAction(
  '[Profile] - Update Profile successful',
  props<{success: string}>()
);

export const UPDATE_PROFILE_FAILED = createAction(
  '[Profile] - Update Profile failed',
  props<{err: string}>()
);

export const DELETE_PROFILE = createAction(
  '[Profile] - Delete Profile',
  props<{profile: any}>()
);

export const DELETE_PROFILE_SUCCESSFUL = createAction(
  '[Profile] - Delete Profile successful',
  props<{success: string}>()
);

export const DELETE_PROFILE_FAILED = createAction(
  '[Profile] - Delete Profile failed',
  props<{err: string}>()
);
