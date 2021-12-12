import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories = [
    {
      nombre: '',
      imgCat: '',
    },
  ];
  display =true;

  @Output() listadoEmpresas = new EventEmitter();

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    let token = localStorage.getItem('auth-token');
    if (!token) {
      alert('Por favor inicie sesion');
    } else {
      this.cargarCategory(token);
    }
  }

  cargarCategory(token: string) {
    this.companiesService.obtenerCategorias(token).subscribe(
      (result) => {
        console.log(result);
        this.categories = result;
        console.log(this.categories);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  listarCategoria(categoria: string) {
    console.log(categoria);
    this.listadoEmpresas.emit(categoria);
    //this.companiesService.Category = empresas;
    //console.log(this.companiesService.Category);
  }
}
