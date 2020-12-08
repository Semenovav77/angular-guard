import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {
  //@ts-ignore
  public userIsLogIn: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public user = ''

  constructor() {
  }

  setUserLogIn() {
    this.userIsLogIn.next(true);
    this.user = 'admin';
  }

  getUserLogIn() {
    return this.userIsLogIn
  }
}
