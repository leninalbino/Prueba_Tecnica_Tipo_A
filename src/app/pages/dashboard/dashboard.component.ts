import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }
  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
