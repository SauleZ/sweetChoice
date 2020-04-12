import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../Services/user.service';
import {ManageUsersDialogComponent} from '../manage-users-dialog/manage-users-dialog.component';
import {RoleServiceService} from '../../Services/role-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userName', 'roleID', 'password', 'action'];
  dataSource: any;
  roles = [];

  paginator = {
    length: 0,
    size: 1,
    page: 0
  };
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _dialog: MatDialog,
              private _service: UserService,
              private _service2: RoleServiceService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getRoles();
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource = filterValue;
  }

  // ngAfterViewInit() {
  //
  // }

  getRoles() {
    this._service2.getAllRoles().subscribe(res => {
      this.roles = res;
    });
  }

  findRole(id: number) {
    for (let i = 0; i < this.roles.length; i++) {
      if (this.roles[i].id === id) {
        return this.roles[i].nameRole;
      }
    }
  }

  getUsers() {
    const query = '?_page=' + this.paginator.page + '&_limit=' + this.paginator.size;
    this._service.getAllUersPage(query).subscribe(res => {
      this.dataSource = res;
      this._service.getAllUers().subscribe(res2 => {
        this.paginator.length = res2.length;
      });
    });
  }

  delete(id) {
    this._service.deleteUser(id).subscribe(res => {
      this.getUsers();
    }, error => {
      console.error(error);
    });
  }

  update(user: any) {
    this._dialog.open(ManageUsersDialogComponent, {
      width: '450px',
      data: user
    }).afterClosed().subscribe(res => {
      this._service.updateUser(res).subscribe(result =>
        this.getUsers());
    });
  }

  create() {
    this._dialog.open(ManageUsersDialogComponent, {
      width: '450px',
    }).afterClosed().subscribe(res => {
      this._service.createUser(res).subscribe(result => {
        this.getUsers();
      });
    });
  }

  changeTableList(event) {
    console.log('asda')
    this.paginator.page = event.pageIndex;
    this.paginator.size = event.pageSize;
    this.getUsers();
  }
}
