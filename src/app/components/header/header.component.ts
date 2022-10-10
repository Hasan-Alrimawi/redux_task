import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { State } from 'src/app/redux/types.redux';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/redux/types.redux';
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
