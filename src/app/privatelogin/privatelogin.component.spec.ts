import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateloginComponent } from './privatelogin.component';

describe('PrivateloginComponent', () => {
  let component: PrivateloginComponent;
  let fixture: ComponentFixture<PrivateloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
