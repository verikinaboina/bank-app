import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from '../shared/services/todos.service'
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  dateVal: any;
  name: any;

  sampleData = [
    'this is first Student1',
    'this is first Student2',
    'this is first Student3',
  ]

  constructor(
    private router: Router) { }

  ngOnInit() {
    this.dateVal = new Date().getFullYear();
  }

  tableDetails() {
    this.router.navigateByUrl('/transactions');
  }

  autoLoan() {
    this.router.navigateByUrl('/auto-loan');
  }

}
