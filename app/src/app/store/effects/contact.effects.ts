import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromRoot from '../reducers';
import { Store } from '@ngrx/store';
import * as contactAction from '../actions/contact.action';
import {ContactService} from "../../utilities/services/neverForgetAText/contact.service";

@Injectable()
export class ContactEffects {

  setUserContacts = createEffect(() => this.actions$.pipe(
    ofType(contactAction.setContactsAction.type),
    switchMap((action: any) => this.contactService.getUserContacts(action.userID)),
    map((contacts: any) => contactAction.setContactsActionSuccessful({contacts: contacts})),
    catchError((err: string) => of(contactAction.getContactsActionFailed({err})))
  ));

  getUserContacts = createEffect(() => this.actions$.pipe(
    ofType(contactAction.getContactsAction.type),
    switchMap((action: any) => {

      return this.store.select(fromRoot.getContacts).pipe(
        switchMap((contacts: any) => {

          if (contacts.length) {
            return of(contacts);
          }
          return this.contactService.getUserContacts(action.userID);
        })
      );
    }),
    map((contacts: any) => contactAction.setContactsActionSuccessful({contacts: contacts})),
    catchError((err: string) => of(contactAction.getContactsActionFailed({err})))
  ));

  getUserContactsWithMessages = createEffect(() => this.actions$.pipe(
    ofType(contactAction.getContactsWithMessagesAction.type),
    switchMap((action: any) => {

      return this.store.select(fromRoot.getContactsWithMessages).pipe(
        switchMap((contacts: any) => {

          if (contacts.length) {
            return of(contacts);
          }
          return this.contactService.getContactsWithMessages(action.userID);
        })
      );
    }),
    map((contacts: any) => contactAction.getContactsWithMessagesActionSuccessful({contacts: contacts})),
    catchError((err: string) => of(contactAction.getContactsWithMessagesActionFailed({err})))
  ));

  constructor(
    private actions$: Actions,
    private contactService: ContactService,
    private store: Store
  ) {
  }
}
