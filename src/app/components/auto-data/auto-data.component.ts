import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/shared/services/todos.service';

@Component({
  selector: 'app-auto-data',
  templateUrl: './auto-data.component.html',
  styleUrls: ['./auto-data.component.scss']
})
export class AutoDataComponent implements OnInit {
  todoDataName: any;
  constructor(
    private todoVal: TodosService
  ) {}

  ngOnInit() {
    this.dataVal();
  }

  dataVal() {
    this.todoVal.getTodo().subscribe((data: any) => {
      this.todoDataName = data.todos; // Assign data.todos to todoDataName
    });
  }
}
