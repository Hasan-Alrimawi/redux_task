import {Action} from '@ngrx/store';
import {State} from '../types.redux';

export const ADD_DATA = "ADD_DATA";

export class AddUser implements Action{
    readonly type = ADD_DATA;
    constructor(public payload: State){

    }

}

export type Actions = AddUser | any;