import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallgameComponent } from './listallgame.component';

describe('ListallgameComponent', () => {
  let component: ListallgameComponent;
  let fixture: ComponentFixture<ListallgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListallgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
