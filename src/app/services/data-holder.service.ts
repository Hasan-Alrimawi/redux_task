import { Injectable } from '@angular/core';
import { User } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {
  getData(){
    let retrieved = JSON.parse(localStorage.getItem("userData") || '{}');
    if(retrieved == null){
      retrieved = new User("Hasan", "Rimmawi", "hasan.alrimawi@exalt.ps");
    }
    return retrieved;
  }

  saveData(newUser:User){
    localStorage.setItem("UserData", JSON.stringify(newUser));
  }
}
