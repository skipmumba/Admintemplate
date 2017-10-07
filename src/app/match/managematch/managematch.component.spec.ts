import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagematchComponent } from './managematch.component';

describe('ManagematchComponent', () => {
  let component: ManagematchComponent;
  let fixture: ComponentFixture<ManagematchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagematchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
