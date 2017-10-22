import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsumComponent } from './walletsum.component';

describe('WalletsumComponent', () => {
  let component: WalletsumComponent;
  let fixture: ComponentFixture<WalletsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
