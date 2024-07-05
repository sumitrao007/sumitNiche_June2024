import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evnetbiding3Component } from './evnetbiding3.component';

describe('Evnetbiding3Component', () => {
  let component: Evnetbiding3Component;
  let fixture: ComponentFixture<Evnetbiding3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Evnetbiding3Component]
    });
    fixture = TestBed.createComponent(Evnetbiding3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
