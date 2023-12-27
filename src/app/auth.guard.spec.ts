import { AuthGuard } from './auth.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authServiceSpy: any;
  let authService: any;

  beforeEach(() => {
    // const authService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    guard = new AuthGuard(authService);
    authServiceSpy = TestBed.inject(AuthService) as any;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // it('should return true if user is logged in', () => {
  //   authServiceSpy.isLoggedIn.and.returnValue(true);
    
  //   const route = {} as ActivatedRouteSnapshot;
  //   const state = {} as RouterStateSnapshot;

  //   const canActivateResult = guard.canActivate(route, state);
  //   expect(canActivateResult).toBe(true);
  // });

  // it('should return false if user is not logged in', () => {
  //   authServiceSpy.isLoggedIn.and.returnValue(false);
    
  //   const route = {} as ActivatedRouteSnapshot;
  //   const state = {} as RouterStateSnapshot;

  //   const canActivateResult = guard.canActivate(route, state);
  //   expect(canActivateResult).toBe(false);
  // });

  // Add more test cases as needed...
});
