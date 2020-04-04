import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpService) {}

  getUsers(rawParams) {
    const params = this.getParams(rawParams);
    return this.http.get('users?'+params.toString());
  }

  getUserDetails(uid) {
    return this.http.get('users/'+uid);
  }

  getUserRepositories(uid){
    return this.http.get('users/'+uid+'/repos')
  }

  getParams(rawObject) {
    let params = new HttpParams({ fromObject: {...rawObject} });
    return params;
  }
}
