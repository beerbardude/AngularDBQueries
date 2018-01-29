import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPageComponent } from './query-page.component';

describe('QueryPageComponent', () => {
  let component: QueryPageComponent;
  let fixture: ComponentFixture<QueryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // :TODO make test work
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
