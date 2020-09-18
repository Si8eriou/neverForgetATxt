import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../environments/environment';

import * as fromProfile from './profile.reducer';
import * as fromContact from './contact.reducer';

export interface State {
  [fromProfile.profileFeatureKey]: fromProfile.State;
  [fromContact.contactFeatureKey]: fromContact.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromProfile.profileFeatureKey]: fromProfile.reducer,
  [fromContact.contactFeatureKey]: fromContact.reducer,
}

export const getProfileState = createFeatureSelector<State, fromProfile.State>(fromProfile.profileFeatureKey);
export const getProfile = createSelector(getProfileState, fromProfile.getProfile);

export const getContactState = createFeatureSelector<State, fromContact.State>(fromContact.contactFeatureKey);
export const getContacts = createSelector(getContactState, fromContact.getContacts);
export const getContactsWithMessages = createSelector(getContactState, fromContact.getContactsWithMessages);
