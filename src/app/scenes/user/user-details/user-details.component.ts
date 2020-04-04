import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import bytes from 'bytes';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private userService:UserService) { }

  userDetails = {}
  userRepositories = [];
  ngOnInit() {
     this.getDetails();
     this.getRepositories();
  }

  getDetails(){
    this.userService.getUserDetails(this._activatedRoute.snapshot.params.slug).subscribe(res=>{
      this.userDetails = res;
   })
  }

  getRepositories(){
    this.userService.getUserRepositories(this._activatedRoute.snapshot.params.slug).subscribe(res=>{
      this.userRepositories = res;
   })
  }

  parseSize(size){
    return bytes(size)
  }
}
