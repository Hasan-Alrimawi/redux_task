import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/app.component';

import {Observable} from 'rxjs';
import { State } from 'src/app/redux/submitAction';
import { appState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as StoreActions from "../../actions/sample.action"
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:User = new User("","","");
  constructor(private store: Store<appState>) { }
  changeData(user:User){
    this.store.dispatch(new StoreActions.ChangeData({personalData:this.user}))
  }
  ngOnInit(): void {
  }
  saveData(){
    this.changeData(this.user);
  }
}
