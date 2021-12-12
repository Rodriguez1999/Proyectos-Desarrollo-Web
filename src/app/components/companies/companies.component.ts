import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies:any = [];

  constructor(private empresaService:GeneralService) { }

  ngOnInit(): void {
    console.log('hola');
    this.empresaService.obtenerEmpresas().subscribe(res=>{
      this.companies = res;
    })
  }

}
