import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteamComponent } from './addteam.component';

describe('AddteamComponent', () => {
  let component: AddteamComponent;
  let fixture: ComponentFixture<AddteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
