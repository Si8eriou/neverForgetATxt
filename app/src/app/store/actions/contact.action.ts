import {createAction, props} from "@ngrx/store";

export const setContactsAction = createAction(
  '[Contact] set user contacts',
  props<{userID: any}>()
)

export const setContactsActionSuccessful = createAction(
  '[Contact] set user contacts successful',
  props<{contacts: any}>()
)

export const setContactsActionFailed = createAction(
  '[Contact] set user contacts failed',
  props<{err: string}>()
)

export const getContactsAction = createAction(
  '[Contact] get user contacts',
  props<{userID: number}>()
)

export const getContactsActionSuccessful = createAction(
  '[Contact] get user contacts successful',
  props<{contacts: any}>()
)

export const getContactsActionFailed = createAction(
  '[Contact] get user contacts failed',
  props<{err: string}>()
)

export const createContactAction = createAction(
  '[Contact] create user contact',
  props<{userID: any}>()
)

export const createContactActionSuccessful = createAction(
  '[Contact] create user contact successful',
  props<{userID: any}>()
)

export const createContactActionFailed = createAction(
  '[Contact] create user contact failed',
  props<{err: string}>()
)

export const deleteContactAction = createAction(
  '[Contact] delete user contact',
  props<{userID: any}>()
)

export const deleteContactActionSuccessful = createAction(
  '[Contact] delete user contact successful',
  props<{userID: any}>()
)

export const deleteContactActionFailed = createAction(
  '[Contact] delete user contact failed',
  props<{err: string}>()
)

export const getContactsWithMessagesAction = createAction(
  '[Contact] get user contacts with messages',
  props<{userID: any}>()
)

export const getContactsWithMessagesActionSuccessful = createAction(
  '[Contact] get user contacts with messages successful',
  props<{contacts: any}>()
)

export const getContactsWithMessagesActionFailed = createAction(
  '[Contact] get user contacts with messages failed',
  props<{err: string}>()
)

