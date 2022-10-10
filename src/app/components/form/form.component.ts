import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/app.component';
import { appState } from 'src/app/redux/types.redux';
import { Store } from '@ngrx/store';
import * as StoreActions from "../../redux/actions/sample.action"
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:User = new User("","","");
  constructor(private store: Store<appState>) { }
  changeData(user:User){
    this.store.dispatch(new StoreActions.AddUser({personalData:this.user}));
  }
  ngOnInit(): void {
  }
  saveData(){
    this.changeData(this.user);
  }
}
