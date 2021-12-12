import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.replace('http://localhost:52089/landing');
  }

}