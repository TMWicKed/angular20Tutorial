import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControFlow } from './contro-flow';

describe('ControFlow', () => {
  let component: ControFlow;
  let fixture: ComponentFixture<ControFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
