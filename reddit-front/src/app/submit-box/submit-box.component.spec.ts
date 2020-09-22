import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBoxComponent } from './submit-box.component';

describe('SubmitBoxComponent', () => {
  let component: SubmitBoxComponent;
  let fixture: ComponentFixture<SubmitBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
