import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationdossierComponent } from './creationdossier.component';

describe('CreationdossierComponent', () => {
  let component: CreationdossierComponent;
  let fixture: ComponentFixture<CreationdossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationdossierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationdossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
