import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UsuariosService } from '../services/usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-actualizar-motorista',
  templateUrl: './actualizar-motorista.component.html',
  styleUrls: ['./actualizar-motorista.component.css']
})
export class ActualizarMotoristaComponent implements OnInit {
  user:any = [];
  motorista:any ={
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    department: "",
    address: "",
    licensePlate: ""
  };
  constructor(private httpClient:HttpClient, private usuarioService:UsuariosService,private modalService: NgbModal) { }
  
  actualizarMotorista(exit:Object){
    this.usuarioService.actualizarUsuario(this.motorista)
      .subscribe(res =>{
        this.openBackDropCustomClass(exit);
    });
  }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuario()
      .subscribe(res =>{
        this.user = res;
        this.motorista.firstName = this.user.firstName;
        this.motorista.lastName = this.user.lastName;
        this.motorista.phone = this.user.phone;
        this.motorista.city = this.user.city;
        this.motorista.department = this.user.department;
        this.motorista.licensePlate = this.user.licensePlate;
        this.motorista.address = this.user.address;
      });
  }

  openBackDropCustomClass(content:Object) {
    this.modalService.open(content, {backdropClass: 'light-red-backdrop'});
  }

  inicio(){
    window.location.replace('http://localhost:4200/perfil');
  }
}
