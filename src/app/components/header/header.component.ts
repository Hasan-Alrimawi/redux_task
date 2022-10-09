import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/app.component';
import {Observable} from 'rxjs';
import { State } from 'src/app/redux/submitAction';
import { appState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: Observable<State[]>;
  constructor(private store: Store<appState>) {
    this.data = store.select('state');
   }

  ngOnInit(): void {
  }

}
