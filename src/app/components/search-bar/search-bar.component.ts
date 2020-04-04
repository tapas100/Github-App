import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UserService } from '../../services/user.service';

export interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchClicked  = new EventEmitter<any>()
  searchInput:any;
  constructor(private dataService:DataService,private userService:UserService) {
    this.searchClicked = new EventEmitter()
  }

  ngOnInit() {
    this.updateUserList({page:1,per_page:20});
  }

  searchEvent(){
     this.searchClicked.emit(this.searchInput)
  }

  updateUserList(params){
    this.userService.getUsers(params).subscribe(res=>{
      this.dataService.handleUserList(res);
    })
  }

}
