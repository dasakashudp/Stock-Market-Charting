import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StockExchangeService} from '../../../services/stock-exchange.service';
import { StockExchange } from '../../../models/StockExchange';

@Component({
  selector: 'app-create-stock-exchange',
  templateUrl: './create-stock-exchange.component.html',
  styleUrls: ['./create-stock-exchange.component.css']
})
export class CreateStockExchangeComponent implements OnInit {

  constructor(private stockExchange1: StockExchangeService) { }

  stockExchange: StockExchange = {
    name: '',
    description: '',
    address: '',
    remarks : ''
  };

  @Output() stockExchangeAdd: EventEmitter<StockExchange> = new EventEmitter();
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.stockExchange1.addStockExchange(this.stockExchange);
    this.stockExchangeAdd.emit(this.stockExchange);
  }
}
