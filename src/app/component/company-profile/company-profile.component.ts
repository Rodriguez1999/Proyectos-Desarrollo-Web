import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { CompaniesService } from 'src/app/services/companies.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css'],
})
export class CompanyProfileComponent implements OnInit {
  @ViewChild('products')
  products!: ProductsComponent;

  @Output() identificador = new EventEmitter();

  empresa!: Company;
  constructor(private companyService: CompaniesService) {}

  ngOnInit(): void {
    //this.products.cargarProductos(this.myID);
  }

  cargarPerfil(token: string, id: string) {
    this.companyService.obtenerEmpresaById(token, id).subscribe(
      (result) => {
        this.empresa = result;
        console.log(this.empresa, this.empresa._id);
        this.identificador.emit(this.empresa._id);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
