import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmatchComponent } from './searchmatch.component';

describe('SearchmatchComponent', () => {
  let component: SearchmatchComponent;
  let fixture: ComponentFixture<SearchmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
