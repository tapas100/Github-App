import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataService {

  userList: Subject<any> = new Subject();
  userList$: Observable<any> = this.userList.asObservable()
  constructor() { }

  handleUserList(data: any) {
    this.userList.next(data)
  }

}
