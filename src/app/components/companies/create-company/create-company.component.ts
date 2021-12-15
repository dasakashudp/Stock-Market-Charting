import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../models/Company';
import { CompanyService } from 'src/app/services/company.service';
import {StockExchange} from '../../../models/StockExchange';
//import * as http from 'http';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router) { }

  company: Company = {
    name: '',
    code: '',
    turnover: '',
    ceo: '',
    boardOfDirectors: '',
    sectorName: '',
    description: ''
  };
  //@Output() CompanyAdd: EventEmitter<Company> = new EventEmitter();
  private addComponent: CreateCompanyComponent;
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.companyService.addCompany(this.company);
    this.router.navigate(['/companies']);
    this.addComponent.ngOnInit();
  }

//function goToPage(pageName: string){
   // this.router.navigate([`${pageName}`]);}



}
