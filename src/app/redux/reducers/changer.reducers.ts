import { State } from "../types.redux";
import * as StoreActions from "../actions/sample.action"
import { User } from "../../app.component";

const initialState: State = {
    personalData: new User("Hasn","Alrimaw","has@gmail.com")
}

export function reducer(state: State[] = [initialState], action: StoreActions.Actions) {
    switch (action.type) {
        case StoreActions.ADD_DATA:
            return [...state, action.payload];
        default:
            return state;
    }
}