import { Action, createReducer, on} from "@ngrx/store";
import * as contactActions from '../actions/contact.action';

export const contactFeatureKey = 'contact';

export interface State {
  contacts: any,
  contactsLoading: boolean,
  getContactsSuccessful: boolean,
  getContactsFailed: string,

  contactsWithMessages: any,
  getContactsWithMessagesLoading: boolean,
  getContactsWithMessagesSuccessful: boolean,
  getContactsWithMessagesFailed: string
}

export const initialState: State = {
  contacts: false,
  contactsLoading: false,
  getContactsSuccessful: null,
  getContactsFailed: null,

  contactsWithMessages: false,
  getContactsWithMessagesLoading: false,
  getContactsWithMessagesSuccessful: null,
  getContactsWithMessagesFailed: null
}

const contactReducer = createReducer(
  initialState,

  on(contactActions.setContactsAction, (state, action) => ({
    ...state,
    contacts: action.userID
  })),

  on(contactActions.setContactsActionSuccessful, (state, action) => ({
    ...state,
    contacts: action.contacts
  })),

  on(contactActions.setContactsActionFailed, (state, action) => ({
    ...state,
    contacts: action.err
  })),

  on(contactActions.getContactsAction, state => ({
    ...state,
    contactsLoading: true,
  })),

  on(contactActions.getContactsActionSuccessful, (state, action) => ({
    ...state,
    contactsLoading: false,
    getContactsSuccessful: true,
    contacts: action.contacts
  })),

  on(contactActions.getContactsActionFailed, (state, action) => ({
    ...state,
    contactsLoading: false,
    getContactsSuccessful: false,
    getContactsFailed: action.err
  })),

  on(contactActions.getContactsWithMessagesAction, (state, action) => ({
    ...state,
    getContactsWithMessagesLoading: true
  })),

  on(contactActions.getContactsWithMessagesActionSuccessful, (state, action) => ({
    ...state,
    getContactsWithMessagesLoading: false,
    getContactsWithMessagesSuccessful: true,
    contactsWithMessages: action.contacts
  })),

  on(contactActions.getContactsWithMessagesActionFailed, (state, action) => ({
    ...state,
    getContactsWithMessagesLoading: false,
    contactsWithMessages: false,
    getContactsWithMessagesFailed: action.err
  })),
)

export function reducer(state: State | undefined, action: Action) {
  return contactReducer(state, action);
}

export const getContacts = (state: State) => state.contacts;
export const getContactsWithMessages = (state: State) => state.contactsWithMessages;
