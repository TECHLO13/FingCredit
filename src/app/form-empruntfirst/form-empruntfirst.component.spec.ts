import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOrmEmpruntfirstComponent } from './form-empruntfirst.component';

describe('FOrmEmpruntfirstComponent', () => {
  let component: FOrmEmpruntfirstComponent;
  let fixture: ComponentFixture<FOrmEmpruntfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FOrmEmpruntfirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FOrmEmpruntfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
