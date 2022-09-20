import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loyout',
  templateUrl: './loyout.component.html',
  styleUrls: ['./loyout.component.css']
})
export class LoyoutComponent implements OnInit {

  title = 'Usuarios';
  public Sidenav: boolean = false;
  isExpanded = true;
  isShowing = false;

  showUser:boolean=false

  constructor(
  ) { }

  ngOnInit(): void {
  }
  getSidenav(): boolean {
    return this.Sidenav;
  }
  setSidenav(value: boolean) {
    this.Sidenav = value;
  }
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

}
