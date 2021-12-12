import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  res:any=[];
  user:any={};
  sesion:any = {
    email: '',
    password: ''
  }
  constructor(private modalService: NgbModal, private httpClient:HttpClient, private usuarioService:UsuariosService) { }

  ngOnInit(): void {
  }

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
        window.location.replace('http://localhost:4200/pedidosDisponibles');
      }else{
        this.openBackDropCustomClass(error);
      }
    },
    err=>{
      this.openBackDropCustomClass(exit);
    });
  }

}
