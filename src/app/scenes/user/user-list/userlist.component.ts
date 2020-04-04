import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DataService } from '../../../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { BankData } from '../../../models/bankData';
import { UserService } from '../../../services/user.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
  providers: [DataService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length = 1000;
  pageSize = 20;
  columnKeys = [];
  dataSource: MatTableDataSource<any>;
  displayedColumns: any[] = [
    'avatar',
    'username',
    'actions'
  ];
  constructor(private dataService: DataService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUserList();
  }
  getUserList() {
    this.dataService.userList$.subscribe(
      response => {
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
      }
    );
  }



  searchData(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(user) {
    this.router.navigate(['user-details/' + user.login]);
  }
}

