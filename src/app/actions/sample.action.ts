import { Injectable } from "@angular/core";
import {Action} from '@ngrx/store';
import {State} from '../redux/submitAction';

export const changePersonalData = "CHANGE_DATA";

export class ChangeData implements Action{
    readonly type = changePersonalData;
    constructor(public payload: State){

    }

}

export type Actions = ChangeData | any;