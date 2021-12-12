import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  res:any;
  user:any;
  sesion:any = {
    email: '',
    password: ''
  }

  constructor(private httpClient:HttpClient, private modalService: NgbModal) { }

  openBackDropCustomClass(content:Object) {
    this.modalService.open(content, {backdropClass: 'light-red-backdrop'});
  }

  iniciarSesion(exit:Object, error:Object){
    this.httpClient.post('http://localhost:3550/api/auth/signin', this.sesion)
    .subscribe(res=>{
      this.res = res;
      this.user = this.res.user;
      if(this.user.status != 0){
        localStorage.setItem("token", this.res.token);
        localStorage.setItem("userId", this.user._id);
        window.location.replace('http://localhost:52089/products');
      }else{
        this.openBackDropCustomClass(error);
      }
    },
    err=>{
      this.openBackDropCustomClass(exit);
    });
  }

  ngOnInit(): void {
  }

}
