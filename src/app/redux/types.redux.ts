import { User } from "../app.component";

export interface State{
    personalData: User;
}

export interface appState{
    readonly state: State[];
}