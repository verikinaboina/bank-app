import { Component, OnInit } from '@angular/core';

import { combineLatest, concat, Observable, of, forkJoin, merge } from 'rxjs'; //rxjs 6.5.4

import { map, tap } from 'rxjs/operators' // rxjs 6.5.4

interface person {
  name: string,
  age: number
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})

export class RxjsComponent implements OnInit {

  data: person[] = [
    {
      name: 'First person',
      age: 100
    },
    {
      name: 'First of First',
      age: 200
    }
  ]

  data2: person[] = [
    {
      name: 'Second person',
      age: 100
    },
    {
      name: 'Second of first',
      age: 200
    }
  ]

  private readonly firstData$: Observable<person[]> = of(this.data);
  private readonly secondData$: Observable<person[]> = of(this.data2);

  private readonly concat1$: Observable<any> = of(1, 2, 3, 4);
  private readonly concat2$: Observable<any> = of('a', 'b', 'c', 'd');
  private readonly concat3$: Observable<any> = of('n', 'a', 'm', 'e');

  private readonly forkJoin1$: Observable<any> = of(1, 2, 3, 4);
  private readonly forkJoin2$: Observable<any> = of('a', 'b', 'c', 'd');
  private readonly forkJoin3$: Observable<any> = of('n', 'a', 'm', 'e');

  private readonly merge1$: Observable<any> = of(1, 11, 111, 4);
  private readonly merge2$: Observable<any> = of('a', 'b');
  private readonly merge3$: Observable<any> = of('m', 'e');

  //customer observable
  private readonly customObservable$ = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      // observer.complete();
    }, 2000); // it will two to emit all at a time then emit the value in forkJoin
    observer.next(5);
    observer.next(6);
  })

  newData1: any;
  newData2: any;

  constructor() { }

  ngOnInit() {
    // combineLatest
    combineLatest([this.firstData$, this.secondData$]).pipe(
      map(([nnnn, dddd]) => {
        this.newData1 = nnnn;
        this.newData2 = dddd;
      }
      )).subscribe();

    // concat
    // No need to specify as an array while concat observables like combine latest. Only one parameter is required while subscribe.
    concat(this.concat1$, this.concat2$, this.concat3$).subscribe((data) => {
     // console.log("", data)
    })

    // forkJoin
    // It will to complete till last observable to emit.
    forkJoin(this.forkJoin1$, this.forkJoin2$, this.forkJoin3$, this.customObservable$).subscribe((data) => {
     // console.log("", data)
    })

    // merge
    // It will emit the observabes whomever comes first
    merge (this.merge1$, this.merge2$, this.merge3$, this.customObservable$).subscribe((data) => {
     // console.log("", data)
    })

    // tap
    // doesn't effect the source and without side effect it will return the observable
    this.forkJoin1$.pipe(tap((value) => {
      // console.log("tap value", value)
    })).subscribe();

    // map
    // It does transform the original array into toher forms
    this.forkJoin2$.pipe(map((value) => {
      // console.log("tap value", value)
    })).subscribe();
  }
}