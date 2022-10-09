import { Action } from "@ngrx/store";
import { State } from "../redux/submitAction";
import * as StoreActions from "../actions/sample.action"
import { User } from "../app.component";

const initialState: State = {
    // personalData: JSON.parse(localStorage.getItem('data')as any)
    personalData: new User("Hasn","Alrimaw","has@gmail.com")
}

export function reducer(state: State[] = [initialState], action: StoreActions.Actions) {
    console.log(action.type);
    console.log(StoreActions.changePersonalData);
    switch (action.type) {
        case StoreActions.changePersonalData:
            // let newState = {...state};
            // newState[newState.length].personalData.firstName = ""
            return [...state, action.payload];
        default:
            return state;
    }
}