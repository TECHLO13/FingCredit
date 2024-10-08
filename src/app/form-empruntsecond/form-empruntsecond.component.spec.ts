import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpruntsecondComponent } from './form-empruntsecond.component';

describe('FormEmpruntsecondComponent', () => {
  let component: FormEmpruntsecondComponent;
  let fixture: ComponentFixture<FormEmpruntsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEmpruntsecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEmpruntsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
