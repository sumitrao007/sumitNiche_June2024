import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeuserComponent } from './deleteeuser.component';

describe('DeleteeuserComponent', () => {
  let component: DeleteeuserComponent;
  let fixture: ComponentFixture<DeleteeuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteeuserComponent]
    });
    fixture = TestBed.createComponent(DeleteeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
