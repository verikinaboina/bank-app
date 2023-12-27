import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodosService } from './todos.service';
import { of } from 'rxjs';

describe('TodosService', () => {
  let service: TodosService;
  let mockTodosService:any;

  beforeEach(() => {

    mockTodosService = {
      getTodo: jest.fn()
    }
    service = new TodosService(mockTodosService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should test todoList', () => {
  //   const url = 'https://dummyjson.com/todos/1';
  //   const obj = {
  //     id: 122
  //   }
  //   jest.spyOn(mockTodosService, 'geToDo').mockReturnValue(of(url));
  //   service.getTodo();
  //   expect(mockTodosService.getTodo).toBeTruthy()
  // })
});
