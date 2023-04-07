import { Component, OnInit } from '@angular/core';
import { transactionsData } from '../../constants/tableData'
@Component({
  selector: 'app-transactions-data',
  templateUrl: './transactions-data.component.html',
  styleUrls: ['./transactions-data.component.scss']
})
export class TransactionsDataComponent implements OnInit {
  transData: any = transactionsData;

  constructor() { }
  
  ngOnInit() { 
    console.log("transaData", this.transData)
  }
}
