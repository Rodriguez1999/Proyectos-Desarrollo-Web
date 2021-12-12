import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies = [];

  @Output() idEmpresa = new EventEmitter();

  constructor(private companiesService:CompaniesService) { }

  ngOnInit(): void {

    let token = localStorage.getItem('auth-token');
    if (!token) {
      alert('Por favor inicie sesion');
    } else {
    }
  }

  listarEmpresas(token:string,category: string){
    this.companiesService.listarEmpresas(token,category).subscribe(
      (result) => {
        console.log(result);
        this.companies =result.companies;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cargarPerfilEmpresa(id:string){
    this.idEmpresa.emit(id);
  }

}
