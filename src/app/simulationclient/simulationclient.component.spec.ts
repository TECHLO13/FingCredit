import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationclientComponent } from './simulationclient.component';

describe('SimulationclientComponent', () => {
  let component: SimulationclientComponent;
  let fixture: ComponentFixture<SimulationclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationclientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
