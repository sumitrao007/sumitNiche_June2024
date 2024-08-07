import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParameterComponent } from './query-parameter.component';

describe('QueryParameterComponent', () => {
  let component: QueryParameterComponent;
  let fixture: ComponentFixture<QueryParameterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryParameterComponent]
    });
    fixture = TestBed.createComponent(QueryParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
