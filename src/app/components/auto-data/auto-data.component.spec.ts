import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDataComponent } from './auto-data.component';

describe('AutoDataComponent', () => {
  let component: AutoDataComponent;
  let fixture: ComponentFixture<AutoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
