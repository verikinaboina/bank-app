import { RegisterComponent } from './register.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let formBuilder: FormBuilder;
  let router: Router;

  beforeEach(() => {
    formBuilder = new FormBuilder();
    router = {
      navigateByUrl: jest.fn(),
    } as any; // Mocking Router

    component = new RegisterComponent(router, formBuilder);
    component.ngOnInit(); // Initialize the form
  });

  it('should create the RegisterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with firstName, lastName, and password controls', () => {
    expect(component.form).toBeDefined();
    expect(component.getVal.firstName).toBeDefined();
    expect(component.getVal.lastName).toBeDefined();
    expect(component.getVal.password).toBeDefined();
  });

  it('should set submitted to true when RegUser() is called', () => {
    expect(component.submitted).toBe(false);
    component.RegUser();
    expect(component.submitted).toBe(true);
  });

  it('should not navigate and reset form when form is invalid', () => {
    const navigateByUrlSpy = jest.spyOn(router, 'navigateByUrl');
    const formResetSpy = jest.spyOn(component.form, 'reset');
    component.RegUser(); // Form is invalid because it's empty
    expect(navigateByUrlSpy).not.toHaveBeenCalled();
    expect(formResetSpy).not.toHaveBeenCalled();
  });

  it('should reset the form when clear() is called', () => {
    const formResetSpy = jest.spyOn(component.form, 'reset');
    component.clear();
    expect(formResetSpy).toHaveBeenCalled();
  });

  // Add more test cases as needed...
});
