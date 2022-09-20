import { User } from './model/users';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from './services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[]= ['name', 'email', 'phone','city'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  sumPosts:number=0
  totalUsersRegistered: number=0

   // PolarArea
   public polarAreaChartLabels: string[] = [ 'Total Users Registered'];
   public polarAreaChartData: ChartData<'polarArea'> = {
     labels: this.polarAreaChartLabels,
     datasets: [ {
       data: [ this.totalUsersRegistered],
       label: 'Series 1'
     } ]
   };
   public polarAreaLegend = true;

   public polarAreaChartType: ChartType = 'polarArea';

  constructor(private router: Router,
              private dialog: MatDialog,
              private listAllService: UsersService
              ) { }

  ngOnInit(): void {
    this.listAllUsers()
  }

  listAllUsers(){
    this.listAllService.listAll().subscribe(data=>{
      console.log(data);
      this.totalUsersRegistered=data.length
      this.sumPosts=0
      data.forEach(element =>{
        console.log(element);
        this.listAllService.getPostByIdUser(element.id.toString()).pipe(dataPosts =>{
         return dataPosts
        }).subscribe(post =>{
          console.log(post);
          this.sumPosts+=post.length
          console.log(this.sumPosts);
        })

      })
      this.createTable(data)

    })
  }

  createTable(data: User[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator.hidePageSize = false;
  }
  findDetailsById(row:User){
    this.listAllService.setObject(row)
    this.router.navigate(['user/user-details'])
  }
  
}
