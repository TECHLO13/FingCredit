import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpruntThirdComponent } from './form-emprunt-third.component';

describe('FormEmpruntThirdComponent', () => {
  let component: FormEmpruntThirdComponent;
  let fixture: ComponentFixture<FormEmpruntThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEmpruntThirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEmpruntThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
