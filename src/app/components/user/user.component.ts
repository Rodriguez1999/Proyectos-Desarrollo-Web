import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usuarios:any = [];
  users:any = [];
  actInfo:any ={
    status: 0,
    statusDetail: ""
  }

  constructor(private userService:GeneralService) { }

  ngOnInit(): void {
    this.usuarios = [];
    this.userService.obtenerUsuarios().subscribe(res=>{
      this.users = res;

      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].roles[0] == '61a7cc3e42b5509a8acd1d86'){
          this.usuarios.push(this.users[i]);
        }
      }

    })
  }

  activar(id:any){
    this.actInfo.status = 1;
    this.actInfo.statusDetail= "Habilitado";
    this.userService.actualizarUsuario(id, this.actInfo).subscribe(res=>{
      this.ngOnInit();
    });
  }

  desactivar(id:any){
    this.actInfo.status = 0;
    this.actInfo.statusDetail= "Desactivo";

    this.userService.actualizarUsuario(id, this.actInfo).subscribe(res=>{
      this.ngOnInit();
    });

  }

  eliminarUsuario(id:any){
    console.log(id);
    this.userService.eliminarUsuario(id).subscribe(res=>{
      this.ngOnInit();
    });
  }

}
