import { LoginComponent } from './login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let formBuilder: FormBuilder;
  let router: Router;

  beforeEach(() => {
    router = {
      navigateByUrl: jest.fn(),
    } as any; // Mocking Router
    formBuilder = new FormBuilder();
    component = new LoginComponent(formBuilder, router);
    component.ngOnInit(); // Initialize the form
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with userName and password controls', () => {
    expect(component.form).toBeDefined();
    expect(component.getVal.userName).toBeDefined();
    expect(component.getVal.password).toBeDefined();
  });

  it('should set submitted to true when submitUser() is called', () => {
    expect(component.submitted).toBe(false);
    component.submitUser();
    expect(component.submitted).toBe(true);
  });

  // it('should not navigate and set loading when form is invalid', () => {
  //   const navigateByUrlSpy = jest.spyOn(router, 'navigateByUrl');
  //   component.submitUser(); // Form is invalid because it's empty
  //   expect(navigateByUrlSpy).not.toHaveBeenCalled();
  //   expect(component.loading).toBe(false);
  // });

  it('should navigate to "/home" when form is valid', () => {
    component.form.patchValue({
      userName: 'testUser',
      password: 'testPassword',
    });
    const navigateByUrlSpy = jest.spyOn(router, 'navigateByUrl');
    component.submitUser();
    expect(navigateByUrlSpy).toHaveBeenCalledWith('/home');
  });
});
