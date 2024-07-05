import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evnetbiding2Component } from './evnetbiding2.component';

describe('Evnetbiding2Component', () => {
  let component: Evnetbiding2Component;
  let fixture: ComponentFixture<Evnetbiding2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Evnetbiding2Component]
    });
    fixture = TestBed.createComponent(Evnetbiding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
