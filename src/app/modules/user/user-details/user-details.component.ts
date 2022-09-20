import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Albums } from './model/albums';
import { UserDetailsService } from './service/user-details.service';
import { User } from './../users/model/users';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users/services/users.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User
  nameUser:string
  displayedColumns: string[]= ['title'];
  dataSource: MatTableDataSource<Albums>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  totalPostUser:number=0

  constructor(
    private listAllService: UsersService,
    private userDetailsService:UserDetailsService) { }

  ngOnInit(): void {
    this.user=this.listAllService.getObject();
    this.nameUser=this.user.name
    //console.log(this.user.name);
    this.getAlbumsUser()
    this.getTotalPostUser()
  }

  getAlbumsUser(){
    this.userDetailsService.findAlbumsById(this.user.id.toString()).subscribe(dataAlbums =>{
      //console.log(dataAlbums);
      this.createTable(dataAlbums)
    })
  }

  createTable(data: Albums[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator.hidePageSize = false;
  }
  getTotalPostUser(){
    this.listAllService.getPostByIdUser(this.user.id.toString()).subscribe(datapost=>{
      //console.log(datapost);
      this.totalPostUser=datapost.length
      //console.log(this.totalPostUser);

    })
  }

}
