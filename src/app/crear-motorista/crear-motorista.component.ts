import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-motorista',
  templateUrl: './crear-motorista.component.html',
  styleUrls: ['./crear-motorista.component.css']
})
export class CrearMotoristaComponent implements OnInit {
  motoristas:any = [];
  user:any ={
    firstName: "",
    lastName: "",
    DNI: "",
    birthDate: Date,
    phone: "",
    city: "",
    department: "",
    licensePlate: "",
    address: "",
    username: "default",
    email: "",
    password: "",
    status: 0,
    statusDetail: "Pendiente",
    roles: ["driver"]
  }

  constructor(private httpClient:HttpClient, private modalService: NgbModal) {}

  guardarMotorista(){
    this.httpClient.post('http://localhost:3550/api/auth/signup', this.user)
    .subscribe(res=>{

    });
  }

  openBackDropCustomClass(content:Object) {
    this.modalService.open(content, {backdropClass: 'light-red-backdrop'});
  }

  inicio(){
    window.location.replace('http://localhost:4200/login');
  }

  ngOnInit(): void {
  }

}
