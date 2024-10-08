import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpruntFourComponent } from './form-emprunt-four.component';

describe('FormEmpruntFourComponent', () => {
  let component: FormEmpruntFourComponent;
  let fixture: ComponentFixture<FormEmpruntFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEmpruntFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEmpruntFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
